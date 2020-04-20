import React, { useState, Fragment } from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import { connect } from 'react-redux'
import { register, removeError, login } from '../../Actions/index'
import {Input} from './Input';
import {KeyStroke} from './Button';
import { AlertBox } from './Alert';
import { List } from './List';
import { services } from '../Data/data';
import { Text, Position } from '../Styled/Styled';
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '52ch',
        background : '#FFFFFF',  
    },
    position : "relative",
    top : "3em",
    left : "14em",
    ['@media (max-width:1024px)'] : {
        top : "5em",
        left : "0.1em"
    },
    padding : theme.spacing(2),
    display : 'flex',
    flexDirection :'column',
    border:"1px solid #272727",
    zIndex:"0", 
    background : "#ffffff"
    },
    career:{
        margin: "2em 1em", 
    }
  }));

const Form = ( props ) => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:1024px)');
    const [ city, setCity ] = useState('');
    const [ service, setService ] = useState('');
    const [ search, setSearch ] = useState('');
    const [ createProfile, setCreateProfile ] = useState({ 
        Fullname : "", Email:"", 
        Password: "", Number: "", 
        Area : "", Specialisation:""  });
    const [ loginFields, setLoginFields ] = useState({
        Email : "",
        Password : ""  
    })    

    const handleChange = (event, cb) => {
         cb(event.target.value);
    }
    const cancelCard = () => {
        setSearch('');
    }
    const filterOut = async() => {
        let data = JSON.parse(JSON.stringify(services));
        if(!!city && !!service ){
            let result = data.find((val)=> val.city===city );
            if(service.toLowerCase( ) !== 'all'){
                result.services = result.services.filter(val => val.toLowerCase() === service.toLowerCase());
            }
            await setSearch(result);
        }   
    }
    
    const createAccount = () => {
         let {  Fullname: name, Email: email, 
                Password : password, Number : mobileNumber,
                Specialisation : specialisation, Area : area } = createProfile;
         let data = { name, email, 
            password, mobileNumber,
            specialisation, area }    
          props.dispatch(register(data));
    }
    const loginAccount = () => {
        let { Email : email, Password : password } = loginFields
        console.log(email, password);
        let data = { email, password}
        props.dispatch(login(data));
    }
    const handleError = () => {
        props.dispatch(removeError())
    }  
    return (
        <Fragment>
        {props.part === "homepage-header" && <form className = {classes.root}>
             <Input city = { city }
             setCity = {setCity}
             service = { service }
             setService = {setService} 
             handleChange = { handleChange }
             {...props} /> 
             <KeyStroke filterOut={filterOut} {...props}/>
             {!!search && <List 
             cancelCard = { cancelCard }
             search = {search}
             {...props} />}
        </form>}
        {props.part === 'career' && (!props.error?<form className = {classes.career}>
         <Input part={'career'}  setCreateProfile={ setCreateProfile } createProfile={createProfile}/> 
         <Position margin={'0.5em 1em'} sm_margin={'0.5em 1em'} >
         <Text size={'0.8em'} weight={'500'} 
         fontcolor={'#63686e'} padding={'0.4em'}>
             On click, you agreed to all terms & conditions laid down</Text>
             </Position>
         <KeyStroke {...props} createAccount={createAccount}/>
         </form> : <Fragment>
             <AlertBox part={'career'} response={props.response}/>
             <KeyStroke {...props} handleError={handleError} />
             </Fragment>)}
        {props.part === 'career-login' && (!props.loginError?<form className = {classes.career}>
        <Input part={'career-login'} loginFields={loginFields} setLoginFields={setLoginFields} />
        <KeyStroke {...props} formPart={'career-login'} loginAccount={loginAccount}/>
            </form> : <Fragment>
             <AlertBox part={'career'} response={props.response}/>
             <KeyStroke {...props} formPart={'career-login'} handleError={handleError} />
             </Fragment>)}


        {props.part === 'Dashboard-User_Profile' && <form>
            <Input part={'Dashboard-User_Profile'} 
            />
            <KeyStroke {...props} 
            formPart={'Dashboard-User_Profile'} 
            />
            </form>}          
        </Fragment>
    )
}

export default connect()(Form);
