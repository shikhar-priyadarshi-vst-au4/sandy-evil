import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(4),
    },
  },
  alert : {
      padding : theme.spacing(4),
      marginTop: theme.spacing(10),
      marginLeft : theme.spacing(2),
      marginRight : theme.spacing(2),
      letterSpacing : '0.1em'
  }
}));
export const AlertBox = (props) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Alert variant="outlined" severity="error" className={classes.alert}>
        Sorry! {props.response}  
        </Alert>
    </div>
    )
}