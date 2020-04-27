import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import { Add, ReceiptSharp } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    btn_homepage : {
        margin : theme.spacing(1),
        padding : theme.spacing(2)
    },
    btn_career :{
      margin : theme.spacing(2),
        padding : theme.spacing(2)
    },
    btn_login:{
      marginTop : theme.spacing(2),
      padding : "1em 3em",
      letterSpacing : "0.1em"
    },
    form_btn_login : {
      margin : "1em",
      padding : "1em 3em",
      letterSpacing : "0.1em",
    },
    receipt :{
      marginTop : theme.spacing(3),
    }
  }));

export const KeyStroke = (props) => {
    const classes = useStyles();
    const LogOut = () => {
      props.logout();
      console.log(props);
    }
    return(
      <Fragment>
        {props.part === "homepage-header" && <Button variant="contained"
          color="secondary" 
          onClick = {()=>props.filterOut()}
          className = {classes.btn_homepage}>
          Check services in an area
        </Button>}

        {props.part === "career" && <Button variant="contained"
          color={"secondary"} 
          onClick = {()=>props.error?props.handleError():props.createAccount()}
          className = {classes.btn_career}>
          {props.error?<FontAwesomeIcon icon={faArrowCircleRight} 
          style={{padding : '0em 2em'}} size={'2x'}/>:'Create Account'}
        </Button>}
      {props.part === 'career-login' &&  <Button variant="contained"
          color="secondary" 
          onClick = {()=> props.formPart==='career-login'?(props.loginError ? props.handleError()
          : props.loginAccount()) : props.setSignUp(!props.signUp)}
          className = {classes[props.formPart==='career-login'?"form_btn_login":"btn_login"]}>
          {props.formPart==='career-login'?(props.loginError?<FontAwesomeIcon icon={faArrowCircleRight} 
          style={{padding : '0em 2em'}} size={'2x'}/>:"Login"):(props.signUp?"Login": "Create Account")}
        </Button>}
        {
          props.part === 'signup' && 
          <Button variant="contained"
          color={"secondary"} 
          onClick = {()=>props.customerCreateAccount()}
          className = {classes.btn_career}>
          {'Create Account'}
        </Button>
        }
        {
          props.part === 'login' && 
          <Button variant="contained"
          color={"secondary"} 
          onClick = {()=>props.customerLoginAccount()}
          className = {classes.form_btn_login}>
          {'Login'}
        </Button>
        }
        {
          props.part === 'dashboard-signout' &&<Link to={'/'}
          style={{textDecoration : "none"}}><Button
          Button variant="contained"
          color={"secondary"} 
          onClick = {() => props.logout()}
          className = {classes.form_btn_login}>
            Sign Out
          </Button></Link>
        }
        {
          props.part==='booking-page-services-category' &&  <Button
          variant="contained"
          color="secondary"
          onClick={()=>props.addService(props.index)}
          className={classes.button}
          startIcon={<Add/>}
        >
         Add 
        </Button>
        }
        {
          props.part==='booking-page-payment-generate' && <Button
          variant="contained"
          color="secondary"
          //onClick={()=>props.addService(props.index)}
          className={classes.receipt}
          startIcon={<ReceiptSharp/>}
        >
         Generate Bill
        </Button>
        }
      </Fragment> 
    
    )
}
