import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import MessageIcon from '@material-ui/icons/Message';
import {Link} from 'react-router-dom'


//Estilos para o tooltip
const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);



const SocialMedias = () => {
    return (
        <>  
            {/**Mudar o Link para um styled-component para centralizar o style. 
             * Vai facilitar muito a manutencao e legibilidade .
             */}
            {/**O Link nao pode ser para '/' pq nesse caso nao havera o redirect para '/home'.
             * Resultando em nao mostrar nada na tela. Ja que nao havera paremetros para saber qual
             * component deve ser renderizado.
             */}
            <Link to='home' style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                <LightTooltip title='Facebook'>
                    <IconButton color='inherit'>
                        <FacebookIcon />
                    </IconButton>
                </LightTooltip>
            </Link>

            <Link to='home' style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                <LightTooltip title='Instagram'>
                    <IconButton color='inherit'>
                        <InstagramIcon />
                    </IconButton>
                </LightTooltip>
            </Link>

            <Link to='home'  style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                <LightTooltip title='Twitter'>
                    <IconButton color='inherit'>
                        <TwitterIcon />
                    </IconButton>
                </LightTooltip>
            </Link>

            <a href='https://github.com/pedroAndrad1'  style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                <LightTooltip title='Github'>
                    <IconButton color='inherit'>
                        <GitHubIcon />
                    </IconButton>
                </LightTooltip>
            </a>

            <Link to='contato' style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                <LightTooltip title='Fale conosco'>
                    <IconButton color='inherit'>
                        <MessageIcon />
                    </IconButton>
                </LightTooltip>
            </Link>
        </>

    )
}
export default SocialMedias;