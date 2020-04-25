import React, { Fragment } from 'react';
import {Grid, Paper, makeStyles} from '@material-ui/core';
import {Image} from '../General/index'
import {connect} from 'react-redux';
import {Form} from '../General/index';

// const useStyle = makeStyles((theme) => ({
//     SignUp : {
      
//     }
// }))

const SignUp = (props) => {
  //  const classes = useStyle();
    return (
        <Fragment>
          <Grid container>
             <Grid item xs={12} sm={6}>
                 <Image part={'signup'}/>
                 </Grid> 
             <Grid item xs={12} sm={6}>
                 <Form part={'signup'} 
                 //className={classes.SignUp}
                 />
                 </Grid> 
          </Grid>
        </Fragment>
    )
}

export default connect()(SignUp);