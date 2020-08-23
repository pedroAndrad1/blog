import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

//Post principal da pagina. Um paper que ocupa o container de ponta a ponta, com uma imagem, um overlay e textos
//em cima

const useStyles = makeStyles((theme) => ({
    mainPost: {
        /*Para o overlay, que estara dentro do Paper com esse style, ter como referencia o Paper nas posicoes top, 
        right, left e bottom definidas. Assim ele ocupa o paper e nao a tela, vulgo body*/
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        //Como overlay e preto o texto deve ser branco para contraste 
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        //Esse o default, caso nao venha nenhuma image no props, uma imagem qualquer sera renderizada
        backgroundImage: 'url(https://source.unsplash.com/random)',
        //Para a imagem se esticar e cobrir o Paper
        backgroundSize: 'cover',
        //Para a imagem nao se repetir caso ela seja pequena pro Paper
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',


    },
    overlay: {
        /*O overlay tem position absolute para ficar em cima do Paper e nao interferir em seu conteudo.
        Itens com position absolute nao existem para os outros, sao tirados do fluxo e nao interferem sem seus
        posicionamentos*/
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainPostContent: {
        //Este tem position relative para ficar em cima do overlay. Nao entendi porque isso acontece.
        position: 'relative',
        padding: theme.spacing(3),
        /*Em telas com resolucao acima de 960px o conteudo do post tera um padding maior. Assim, o texto nao fica
        tao perto das bordas e os cantos da imagem fica mais visiveis.  */
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

const MainPost = props => {
    const classes = useStyles();
    const { post } = props;

    return (
        <Paper elevation={12} className={classes.mainPost} style={{ backgroundImage: `url(${post.image})` }}>
            {/* Aumenta a prioridade da image passado por props em relacao a dafault */}
            {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}

            <div className={classes.overlay} />

            {/**Sem este container e seu conteudo, o Paper nao aparece. O Paper so envelopa o conteudo.
             * Porem, e possivel setar altura e largura para o Paper. Assim, a imagem de fundo aparece, mas
             * eu teria que setar breakpoints para ter responsividade. 
            */}
            <Grid container>
                {/*ocupa seis colunas do grid, em telas maiores que 960px, para o texto so ir ate metade do Paper*/}
                <Grid item md={6} className={classes.mainPostContent}>
                    <Typography component="h1" variant="h3" gutterBottom>
                        {post.title}
                    </Typography>
                    <Typography variant="h6" paragraph>
                        {post.description}
                    </Typography>
                    <Link to='home' style={{ textDecoration: 'none', color: 'inherit', display:'block', marginBottom:'50px'}}>
                        {post.linkText}
                    </Link>
                    <Typography variant="caption">
                        <Link to={post.linkAutorDaImagem} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {post.autorDaImagem && `Imagem por ${post.autorDaImagem}` }
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}
export default MainPost;