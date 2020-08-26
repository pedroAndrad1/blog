import React from 'react';
//https://www.npmjs.com/package/react-material-ui-carousel
import Carousel from 'react-material-ui-carousel'
import { Paper, Container, Grid, GridListTileBar, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    topico: {
        color: theme.palette.common.white,
        //Para a imagem se esticar e cobrir o Paper
        backgroundSize: 'cover',
        //Para a imagem nao se repetir caso ela seja pequena pro Paper
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        height: 400,
        width: 900,
        [theme.breakpoints.down('md')]: {
            height: 400,
            width: 850,
        },
        [theme.breakpoints.down('sm')]: {
            height: 400,
            width: 550,
        },
        [theme.breakpoints.down('xs')]: {
            height: 400,
            width: 300,
        },

    },
    div: {
        width: '100vw',
        backgroundColor: deepPurple[500],
    },
    carousel: {
        //overflowX:'hidden',
        marginTop: theme.spacing(2)
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    maisLidos: {
        color: theme.palette.common.white,
        marginTop: theme.spacing(2)
    },
}));

const Topicos = props => {

    const { topicos } = props;
    const classes = useStyles();


    return (

        <Container maxWidth='lg' disableGutters >
            <Grid
                container justify="center"
                alignItems="center"
                direction='column'
            >
                <Carousel
                    autoPlay
                    animation='fade'
                    timeout={500}
                    className={classes.carousel}
                >
                    {
                        topicos.map((topico, i) => (
                            <Link to='home'>
                                <Paper className={classes.topico} key={i} elevation={10} style={{ backgroundImage: `url(${topico.image})` }}>
                                    <GridListTileBar
                                        title={`${topico.title}${topico.autor}`}
                                        titlePosition='top'
                                        className={classes.titleBar}
                                    />
                                </Paper>
                            </Link>
                        ))
                    }
                </Carousel>
            </Grid>
        </Container>

    )

}
export default Topicos;

