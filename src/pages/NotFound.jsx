import React from 'react';
import { Container, Grid, Typography, makeStyles, Link } from '@material-ui/core';
import Transition from '../utils/transition/Transition'
import img from '../assets/img/notFound/page-not-found.svg'


const useStyles = makeStyles(theme => ({
    text: {
        opacity: 0.6,
        marginTop: '10px',
    }
}))

const NotFound = () => {

    const classes = useStyles()

    return (
        <Transition transition='fade' timeout={900} >
            <Container maxWidth='lg'>
                <Grid container justify='center' >
                    <Grid item xs={12} container direction='column' justify='center' style={{ padding: '30px' }} >
                        <img src={img} alt='404 page not found' style={{ maxHeight: '200px' }} />
                        <Typography className={classes.text} align='center' variant='caption' component='span'>
                            Icons made by
                        <Link underline='none' href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx"> xnimrodx </Link>
                         from
                         <Link underline='none' href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align='center' variant='h5' component='p' gutterBottom className={classes.text}>
                            Opa, parece que você que está perdido! Use a barra de navegação para encontrar a luz ;)
                    </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Transition>
    );
}
export default NotFound;