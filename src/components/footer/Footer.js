import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import { Grid, Typography, Divider, Hidden, Link } from '@material-ui/core';
import SocialMedias from '../social-medias/SocialMedias';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: deepPurple[200],
        color: theme.palette.common.white,
        paddingTop: 0,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 30
        },
    },
    titulo: {
        textAlign: 'center',
        marginTop: theme.spacing(4),
    },
    dividerFooter: {
        width: 360,
        [theme.breakpoints.down('xs')]: {
            width: 200
        }
    },
    copyright: {
        background: 'rgba(0,0,0,0.2)'

    },

}))


const Footer = props => {

    const classes = useStyles();

    return (
        <Grid container component='footer' className={classes.footer}  >
            <Hidden mdUp>
                <Grid item xs={12} container justify='center' spacing={0}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='h2' style={{ textAlign: 'center' }}>
                            Contatos
                        </Typography>
                    </Grid >
                    <Divider variant='middle' className={classes.dividerFooter} />
                </Grid>
                <Grid item container justify='center' style={{ marginBottom: 30 }}>
                    <SocialMedias />
                </Grid>
            </Hidden>
            <Grid item xs={12} container justify='center' style={{ padding: '30px' }} >
                <Hidden xsDown>
                    <CopyrightIcon />
                </Hidden>
                <Typography variant='subtitle1' align='center' component='p'>
                    Criado por <Link href='https://github.com/pedroAndrad1'color='inherit'>Pedro de Andrade</Link>
                    , usando <Link href='https://material-ui.com/'color='inherit'>Material UI.</Link>
                </Typography>
            </Grid>
        </Grid>
    )
}
export default Footer;