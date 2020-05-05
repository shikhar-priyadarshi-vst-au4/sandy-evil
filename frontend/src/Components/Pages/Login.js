import React, { Fragment, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Image, Form } from '../General/index'
import { connect } from 'react-redux';
import { closeCustomerModal } from '../../Actions/customer'
import { mapStateToProps } from '../StateTransition/index';
import { Position } from '../Styled/Styled'
import { LinearDeterminate, AlertDialog } from '../General/index';
const Login = ({ isCustomerAuthenticated, loggedIn,...props}) => {
     let [loading, setLoading] = useState(true);
     let [completed, setCompleted] = useState(0);
     let [ progress, setProgress ] = useState(false);
     useEffect(() => {
        if(isCustomerAuthenticated && progress){
            let timer = setInterval(( ) => {
                setCompleted((oldCompleted) => {
                  if (oldCompleted === 100) {
                      
                          clearInterval(timer);
                          setLoading(false)
                      
                  }
                  const diff = Math.random() * 10;
                  return Math.min(oldCompleted + diff, 100);
                });
              }, 1000)
        }
      },[isCustomerAuthenticated]);
      const handleClose = (property) => {
        props.dispatch(closeCustomerModal(property))
      } 
    return (
        <Fragment>
         { ( progress && loading) && <LinearDeterminate completed={completed}/>}    
         { (loggedIn && !loading ) && <Position position={'absolute'}> 
            <AlertDialog {...props} part = {'login'} loggedIn={loggedIn} 
            handleClose={handleClose}/>
             </Position>}  
          <Grid container>
             <Grid item xs={12} sm={6}>
                 <Image part={'login'}/>
                 </Grid> 
             <Grid item xs={12} sm={6}>
                 <Form part={'login'} setProgress={setProgress}/>
                 </Grid> 
          </Grid>
        </Fragment>
    )
}

export default connect(mapStateToProps)(Login);