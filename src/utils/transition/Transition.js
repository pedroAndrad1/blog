import React from 'react';
import { Slide, Fade, Collapse, Grow, Zoom } from '@material-ui/core';


//Encapsula todas as Transitions do Material Ui
const Transition = props => {

    const { transition, children } = props;

    switch (transition) {
        case 'slide':
            return (
                <Slide in={true} {...props}>
                    {children}
                </Slide>
            )
        case 'fade':
            return (
                <Fade in={true} {...props}>
                    {children}
                </Fade>
            )
        case 'collapse':
            return (
                <Collapse in={true} {...props}>
                    {children}
                </Collapse>
            )
        case 'grow':
            return (
                <Grow in={true} {...props}>
                    {children}
                </Grow>
            )
        case 'zoom':
            return (
                <Zoom in={true} {...props}>
                    {children}
                </Zoom>
            )
        default:
            return (
                <Slide in={true} {...props}>
                    {children}
                </Slide>
            )

    }


    /*if(transition === 'slide'){
        return (
         <Slide {...props}>
             {children}
         </Slide>
        )
    }*/


}
export default Transition;