//Este sera o primeiro component a ser exibido e, baseado na url recebida pelas props, decidira qual component sera
//renderizado
import React, {useState, useEffect } from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Footer from './components/footer/Footer';
import NotFound from './pages/NotFound';
import { Grid } from '@material-ui/core';

/*Para escolher qual e a tab selecionada e qual component sera renderizado,
tanto aqui (constructor) quanto no Header, de acordo com a url */
const indexToTabName = {
  home: 0,
}
//Nomes nas tabs
const tabs = ['Home', 'Estética corporal', 'Estética facial', 'Estética íntima', 'Terapia capilar', 'Nutracêuticos',
  'Cosmetologia', 'Eletroterapia', 'Spaterapia']


const App = props => {

  //Pegando o segmento da URL com a page (Nao pega mudancas via botoes avancar e voltar do browswer)
  //O history sera passado para o Header ter o poder de mudar a url com a mudanca do tabs
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);
  /*
    Em tese a page ja funciona como um state, pois muda com o history.
    Mas nao estavam acontecendo bugs no roteamento quando se usava os botoes de ir e voltar
    do navegador. Assim os bugs sao resolvidos. Nao entendi o pq.
  */
  const [pagina, setPagina] = useState(page);
  const [notFound, setNotFound] = useState(false);

  //Checa se a page faz parte da lista de page, isso vai acontecer na construcao do component
  useEffect(() => selectedTab === undefined && page !== 'contato' ? setNotFound(true) : null
    , [])


  /*Escuta os eventos de mudanca na url. Quando o evento de click nos botoes de voltar e avancar 
  forem clicados (evento de POP) o componente renderizado sera alterado
  */
  history.listen((location, action) => {

    //Para ocorrer mudancas ao navegar pelo button de fala conosco
    setPagina(location.pathname.substring(1));
    setSelectedTab(indexToTabName[location.pathname.substring(1)]);
    setNotFound(false); //Como esse setState so ocorre num evento de navegacao no app, nunca vai dar 404


    //https://cristinallamas.wordpress.com/2019/01/08/detect-url-route-change-in-reactjs/
    //https://github.com/ReactTraining/history/blob/master/docs/api-reference.md#history.back
    if (action === 'POP') {

      /*Checa se a page faz parte da lista de page. Sim, alem da page ser diferente de contato,
        seria necessario checar se ela faz parte do tabs. Mas so assim funciona ja. Nao sei dizer o pq.
      */
      if (page !== 'contato') {
        setNotFound(true);
      }

      setSelectedTab(indexToTabName[location.pathname.substring(1)])

    }
  })



  //Funcao para comunicacao de mundancas entre o APP e o Header
  const tabChangeListener = newSelectedTab => setSelectedTab(newSelectedTab)

  return (
    <Grid container justify='space-between' direction='column' style={{minHeight: '100vh'}}>
      <Header
        tabChangeListener={tabChangeListener}
        indexToTabName={indexToTabName}
        page={pagina}
        history={history}
        tabs={tabs}
      />
      <main>
        {/**Artificio para simular um roteador. */}
        {selectedTab === 0 && <Home key='home' />}
        {pagina === 'contato' && <Contato key='contato' />}
        {notFound && <NotFound key='notFound' />}
      </main>
      <Footer />
    </Grid>
  );

}
export default App;
