import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Transition from '../utils/transition/Transition';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
    container: {
        height: '71.2vh'
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    formTitulo: {
        marginTop: theme.spacing(4),
        textAlign: 'center'
    },
    form: {
        marginTop: theme.spacing(3),
    },
    submit: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
}))

const Contato = () => {


    const classes = useStyles()

    //const [areaRows, setAreaRows] = useState(2);
    //Para caso de redimensionamento de tela, mas nao funciona com a tela carregando em 
    //window.onresize = () => window.innerWidth <= 960 ? setAreaRows(2) : setAreaRows(areaRows)

    return (
        <Transition transition='slide' direction="right" in={true} timeout={500}>
            <Grid container component='main' className={classes.container}>
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} container justify='center' alignContent='flex-start'>
                    <Grid item xs={8} className={classes.formTitulo}>
                        <Typography component="h1" variant="h5">Contato</Typography>
                    </Grid>
                    <Grid item xs={10} className={classes.form}>
                        <form >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="nome"
                                label="Nome"
                                name="nome"
                                autoFocus
                                autoComplete="name"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="message"
                                label="Mensagem"
                                name="message"
                                multiline
                                rows = {2}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Enviar
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Transition>
    );
}
export default Contato;