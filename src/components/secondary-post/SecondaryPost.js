import React from 'react'
import { Card, CardActionArea, Typography, CardContent, CardMedia, Hidden } from '@material-ui/core';
import LinkMUI from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Transition from '../../utils/transition/Transition';

const useStyles = makeStyles({
    card: {
        //O card nao e por default flex. Tive que colocar aqui pra imagem aparecer
        display: 'flex',
    },
    cardMedia: {
        /*Estou setando a largura da imagem em 360 porque nao quero que a imagem diminua.
          Porem, quando a tela for de 600px para baixo a imagem sera escondida com Hidden
        */
        width: 360,
        height: 225
    },
    link: {
        color: grey[900],
    }
});


/** Um card que contem os posts secundarios */
const SecondaryPost = props => {

    const classes = useStyles();
    const { post } = props

    return (
        <>
            <CardActionArea>
                {/** Vou colocar o card dentro de um CardActionArea para ter o efeito de  hover e click*/}
                <Card className={classes.card}>
                    <CardContent style={{width:'80%'}}>
                        <Typography variant='h5' component='h2' gutterBottom> {post.title} </Typography>
                        <Typography variant='subtitle1' color="textSecondary"> {post.date} </Typography>
                        <Typography variant='subtitle1' gutterBottom > {post.description} </Typography>
                        <LinkMUI variant="subtitle1" underline='none' className={classes.link} >
                            Leia mais...
                        </LinkMUI>
                    </CardContent>
                    <Hidden xsDown>
                        <Transition transition='fade' in={true} timeout={900}>
                            <CardMedia
                                image={post.image}
                                title={post.imageText}
                                className={classes.cardMedia}
                            />
                        </Transition>
                    </Hidden>
                </Card>
            </CardActionArea>
            <Hidden xsDown>
                <a href= {post.linkAutorDaImagem && post.linkAutorDaImagem} style={{ textDecoration: 'none', padding: '7px' }}>
                    <Typography variant="caption">
                        {post.autorDaImagem && `Imagem por ${post.autorDaImagem}`}
                    </Typography>
                </a>
            </Hidden>
        </>
    );

}
export default SecondaryPost;