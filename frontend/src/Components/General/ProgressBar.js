import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
    root : {

    }
})); 

export default function LinearDeterminate({completed, ...props}) {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <LinearProgress variant="determinate" value={completed} color="secondary" />
      </div>
    );
  }



  