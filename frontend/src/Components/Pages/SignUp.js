import React, { Fragment } from 'react';
import {Grid} from '@material-ui/core';
import {Image} from '../General/index'
import {connect} from 'react-redux';
import {Form} from '../General/index';
import {closeCustomerModal} from '../../Actions/customer'
import { Position } from '../Styled/Styled';
import { AlertDialog } from '../General/index';
import { mapStateToProps } from '../StateTransition';

const SignUp = ({isRegister, ...props}) => {
    const handleClose = (property) => {
        props.dispatch(closeCustomerModal(property))
      }
    return (
        <Fragment>
            { isRegister && <Position position={'absolute'}> 
            <AlertDialog {...props} part = {'signup'} isRegister={isRegister} 
            handleClose={handleClose}/>
             </Position>}  
          <Grid container>
             <Grid item xs={12} sm={6}>
                 <Image part={'signup'}/>
                 </Grid> 
             <Grid item xs={12} sm={6}>
                 <Form part={'signup'} />
                 </Grid> 
          </Grid>
        </Fragment>
    )
}

export default connect(mapStateToProps)(SignUp);