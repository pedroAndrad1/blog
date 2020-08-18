import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//Como usar Tabs em conjunto com o react-router-dom: https://www.youtube.com/watch?v=mhjbACbSeSU
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import DeepPurple from '@material-ui/core/colors/deepPurple';
import Grey from '@material-ui/core/colors/grey';
import SocialMedias from '../social-medias/SocialMedias';
import { Link } from 'react-router-dom';

//Estilos para Appbar
const useStyles = makeStyles(theme => ({
    root: {
        padding: '15px',
        background: DeepPurple[200],
        color: DeepPurple[50]
    },
    indicator: {
        backgroundColor: Grey[50]
    },
    titulo: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginBottom: theme.spacing(3)
        }
    }

})
);



/*Criando um tabNameToIndex, que vai criar uma json de inteiros para nomes no tabs. Invertendo o indexToTabName 
  recebido via props
*/
const swapJson = json => {
    return Object.keys(json).reduce((ret, key) => {
        ret[json[key]] = key;
        return ret;
    }, {});
}

//Fazer funcoes para contornar a situação da pagina de contatos

const Header = props => {

    const { tabChangeListener, indexToTabName, tabs, page, history} = props;

    //Para mudar a url de acordo com o Tab selecionado
    const tabNameToIndex = swapJson(indexToTabName);

    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

    const handleChange = (event, selectedTab) => {
        
        
        //Mudando a URL
        history.push(`/${tabNameToIndex[selectedTab]}`);

        setSelectedTab(selectedTab);

        //Comunica ao Pai a mudanca no Tabs
        tabChangeListener(selectedTab);
    };

    const classes = useStyles();

    return (
        <>
            <AppBar position="static" className={classes.root} >
                <Toolbar component='header'>
                    <Grid container justify='space-between' >
                        <Grid container item lg={6} md={5}>
                            <Typography variant="h3" component='h1' className={classes.titulo}>
                                <Link to='home'  style={{textDecoration:'none', color:'inherit'}}>Blog nome</Link>
                            </Typography>
                        </Grid>
                        <Hidden smDown>
                            <Grid item container lg={6} md={7} spacing={1} justify='flex-end' >
                                <SocialMedias />
                            </Grid>
                        </Hidden>
                        <Grid item container justify='center' style={{marginTop: 30}} >
                            <Tabs
                                value={selectedTab}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                classes={
                                    { indicator: classes.indicator }
                                }
                                component='nav'

                            >
                                {
                                    tabs.map((tabLabel, i) => (

                                        <Tab
                                            label={tabLabel}
                                            key={i}
                                            //Isso é  um modelo, apenas as pages Home e Contato estão feitas .
                                            disabled={i != 0}
                                        >
                                        </Tab>
                                    ))
                                }
                            </Tabs>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Header;
