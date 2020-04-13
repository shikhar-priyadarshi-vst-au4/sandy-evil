import React, { useState, Fragment } from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import {Input} from './Input';
import {KeyStroke} from './Button';
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

export const Form = ( props ) => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:1024px)');
    const [ city, setCity ] = useState('');
    const [ service, setService ] = useState('');
    const [ search, setSearch ] = useState('');
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
        {props.part === 'career' &&<form className = {classes.career}>
         <Input part={'career'} /> 
         <Position margin={'0.5em 1em'} sm_margin={'0.5em 1em'} >
         <Text size={'0.8em'} weight={'500'} 
         fontColor={'#63686e'} padding={'0.4em'}>
             On click, i agree to all terms & conditions laid down</Text>
             </Position>
         <KeyStroke {...props}/>
         </form>}
        </Fragment>
    )
}