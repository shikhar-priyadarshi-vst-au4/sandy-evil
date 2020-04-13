import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    btn_homepage : {
        margin : theme.spacing(1),
        padding : theme.spacing(2)
    },
    btn_career :{
      margin : theme.spacing(2),
        padding : theme.spacing(2)
    }
  }));

export const KeyStroke = (props) => {
    const classes = useStyles();
    return(
      <Fragment>
        {props.part === "homepage-header" && <Button variant="contained"
          color="secondary" 
          onClick = {()=>props.filterOut()}
          className = {classes.btn_homepage}>
          Check services in an area
        </Button>}

        {props.part === "career" && <Button variant="contained"
          color="secondary" 
          className = {classes.btn_career}>
          Create Account
        </Button>}

      </Fragment> 
    
    )
}