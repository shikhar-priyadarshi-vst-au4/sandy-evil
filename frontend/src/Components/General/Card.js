import React, { Fragment } from 'react';
import { makeStyles,
         Paper} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    card : {
        margin : theme.spacing(1),
        padding : theme.spacing(1)
    }
}))



export const Card = () => {
    
    const classes = useStyle();
    
    return(
        <Fragment>
           
        </Fragment>
    )
} 