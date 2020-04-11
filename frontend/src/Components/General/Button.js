import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    btn : {
        margin : theme.spacing(1),
        padding : theme.spacing(2)
    }
  }));

export const KeyStroke = (props) => {
    const classes = useStyles();
    return( 
    <Button variant="contained"
     color="secondary" 
     onClick = {()=>props.filterOut()}
     className = {classes.btn}>
      Check services in an area
    </Button>
    )
}