import React, { useState } from 'react';
import { Container, Grid, makeStyles, Divider, Typography } from '@material-ui/core';
import MainPost from '../components/mainPost/MainPost';
import SecondaryPost from '../components/secondary-post/SecondaryPost';
import { deepPurple } from '@material-ui/core/colors';
import Topicos from '../components/trends-carousel/TrendsCarousel';
import Transition from '../utils/transition/Transition';
import PostList from '../components/posts-list/PostsList';
import { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


/*//Post em destaque
const mainPost = {
      title: 'Título do Post',
      description:
            "Várias linhas falando como o conteúdo deste post é interessante  merece a atenção do leitor. Clica que tá muito bom!",
      image: imagem,
      imgText: 'main image description',
      linkText: 'Leia mais…',
};

//Post secundarios em destaque
const secundaryPosts = [
      {
            title: 'Título do Post',
            date: 'Nov 12',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
];

const posts = [
      {
            title: 'Título do Post',
            date: 'Nov 12',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
      {
            title: 'Título do Post',
            date: 'Nov 11',
            description:
                  'Linhas falando sobre o post. A imagem ao lado desaparecerá em telas menores.',
            image: 'https://source.unsplash.com/random',
            imageText: 'Image Text',
      },
];

const topicos = [
      {
            title: 'Título do Post',
            description:
                  "Várias linhas falando como o conteúdo deste post é interessante  merece a atenção do leitor. Clica que tá muito bom!",
            image: imagem,
            imgText: 'main image description',
            linkText: 'Leia mais…',
      },
      {
            title: 'Título do Post',
            description:
                  "Várias linhas falando como o conteúdo deste post é interessante  merece a atenção do leitor. Clica que tá muito bom!",
            image: imagem,
            imgText: 'main image description',
            linkText: 'Leia mais…',
      },
      {
            title: 'Título do Post',
            description:
                  "Várias linhas falando como o conteúdo deste post é interessante  merece a atenção do leitor. Clica que tá muito bom!",
            image: imagem,
            imgText: 'main image description',
            linkText: 'Leia mais…',
      },
] */

const useStyles = makeStyles(theme => ({

      container: {
            marginTop: theme.spacing(3)
      },
      containerTopicos: {
            marginTop: theme.spacing(3),
            backgroundColor: deepPurple[400],
            marginBottom: theme.spacing(3),
            padding: '30px'
      },

}))

const URL_BACKEND = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080'
      : 'https://blog-modelo.herokuapp.com';


const Home = () => {

      const [mainPost, setMainPost] = useState();
      const [secundaryPosts, setSecundaryPosts] = useState();
      const [trends, setTrends] = useState();
      const [posts, setPosts] = useState();

      useEffect(() => {
            fetch(`${URL_BACKEND}/main-post`)
                  .then(res => res.json())
                  .then(res => setMainPost(res));

            fetch(`${URL_BACKEND}/secundary-posts`)
                  .then(res => res.json())
                  .then(res => setSecundaryPosts(res));

            fetch(`${URL_BACKEND}/trends`)
                  .then(res => res.json())
                  .then(res => setTrends(res));

            fetch(`${URL_BACKEND}/posts`)
                  .then(res => res.json())
                  .then(res => setPosts(res));

      }, [])

      const classes = useStyles()
      return (
            <>
                  {
                        (!mainPost || !secundaryPosts || !trends || !posts) &&
                        <Grid container justify='center'>
                              <CircularProgress size={175} />
                        </Grid>
                  }
                  {
                        //A pagina so e exibida quando recebemos as infos do servidor
                        (mainPost && secundaryPosts && trends && posts) &&

                        /*Slide com true no atributo in faz com que a pagina tenha o efeito de slide 
                        quando renderizada junto com o tabs */
                        <Transition transition='slide' direction="right" in={true} timeout={500}>
                              <div>
                                    {/*MaxWidth de 1232px, contando com as margin laterais do container. Sem elas, e 
                                    1260px*/}
                                    <Container component='section' maxWidth='lg' className={classes.container}  >

                                          <MainPost post={mainPost}></MainPost>
                                          <Divider variant='middle' />

                                          {/** Grid container para os posts secundarios */}
                                          <Grid container spacing={5} className={classes.container}>
                                                {secundaryPosts.map((post, i) => (
                                                      <Grid item xs={12} md={6}>
                                                            {/**O card vai ocupar metade do grid em telas de maiores e
                                                             * em telas 
                                                            * de 600px para baixo vai ocupar a linha inteira
                                                 */}
                                                            <SecondaryPost key={i} post={post} />
                                                      </Grid>
                                                ))}
                                          </Grid>
                                    </Container>

                                    <section className={classes.containerTopicos}>
                                          <Container maxWidth='md'>
                                                <Typography align='center' variant='h4' component='h2' style={{ color: 'GhostWhite' }} >
                                                      Mais lidos
                                                </Typography>
                                                <Divider variant='middle' style={{ marginBottom: '10px' }} />
                                          </Container>
                                          <Topicos topicos={trends} />
                                    </section>

                                    <Container
                                          component='section'
                                          maxWidth='md'
                                          className={classes.container}
                                          style={{ marginBottom: 30 }}>
                                          <Typography align='center' variant='h4' component='h2' style={{ opacity: 0.6, }} >
                                                Outros posts
                                           </Typography>
                                          <Divider variant='middle' style={{ marginBottom: '30px' }} />
                                          <PostList posts={posts} />
                                    </Container>

                              </div>
                        </Transition>
                  }
            </>
      );
}
export default Home;