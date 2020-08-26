import React from 'react';
import { Card, CardActionArea, Typography, CardContent, CardMedia, Hidden } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles} from '@material-ui/core/styles';
import { grey, purple } from '@material-ui/core/colors';
import Transition from '../../utils/transition/Transition';
import './PostCard.css'

const useStyles = makeStyles(theme => ({
    card: {
        //O card nao e por default flex. Tive que colocar aqui pra imagem aparecer
        display: 'flex',
        background: purple[100],
        transition: theme.transitions.create(
            ['background-color'],
            {duration: theme.transitions.duration.complex}
        ),
        //Finalmente descobri como se aplica hover neste framework \o/
        "&:hover": {
            backgroundColor: purple[300],
         }

    },
    cardMedia: {
        /*Estou setando a largura da imagem em 360 porque nao quero que a imagem diminua.
          Porem, quando a tela for de 600px para baixo a imagem sera escondida com Hidden
        */
        width: 360,
    },
    link: {
        color: grey[100]
    },
    overlay:{
        position: 'absolute',
        top: 0,
        bottom:0,
        left:0,
        right:0,

        background: purple[500],
        opacity: .7,
        
        display: 'none'

    }
}));



/** Um card que contem os posts secundarios */
const PostCard = props => {

    const classes = useStyles();
    const { post } = props

    return (
        <Link underline='none' >
            {/** O card inteiro e um link para o */}
            <CardActionArea style={{position: 'relative'}}>
                {/** Vou colocar o card dentro de um CardActionArea para ter o efeito de  hover e click*/}
                <span className={classes.overlay}></span>
                <Card className={classes.card} raised={false}>
                    <CardContent style={{width:'70%'}}>
                        <Typography variant='h5' component='h2' gutterBottom > {post.title} </Typography>
                        <Typography variant='subtitle1' color="textSecondary"> {post.date} </Typography>
                        <Typography variant='subtitle1'> {post.description} </Typography>
                        {
                            post.autor &&
                                 <Typography variant='caption'> imagem por {post.autor} </Typography> 
                        } 
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
        </Link>
    );

}
export default PostCard;