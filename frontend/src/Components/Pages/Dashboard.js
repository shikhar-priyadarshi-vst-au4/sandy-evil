import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Paper, Grid,
     makeStyles} from '@material-ui/core';
import { mapStateToProps } from '../StateTransition';
import {  Text, Chip } from '../Styled/Styled'
import { Image, Form } from '../General/index'
import { profileOptions } from '../Data/data'
import { imageUpdate, extractUser } from '../../Actions/worker'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow : 1
    },
    paper: {
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      height : "1000px",
    },
    grid : {
    },
    paper_head : {
      textAlign : 'center', 
        margin : "0.3em 0em",
        backgroundColor : '#fe346e'
    },
    paper_text : {
        textAlign : 'center', 
        margin : "0.3em 0em",
        
    },
    chip : {
      display : "flex",
      backgroundColor : "transparent",
      border: `1px solid #fe346e`,
      borderRadius : `3.5em`
    },
    text : {
        ["&:hover"] : {
            backgroundColor : " #393e46",
            color : "#ffffff",
            fontWeight : "400",
        }
    }
  }));
const WorkerDashboard = ( props ) => {
    const [ option, setOption ] = useState("");
    const classes = useStyles();
    //CDM
    useEffect(( ) => {
      props.dispatch(extractUser(props.data))
     },[props.image]);
    
     const imageHandler = ( event ) => {
      let file = event.target.files[0];
      console.log(file);
      if(file){
        props.dispatch(imageUpdate(file));
      }
    } 
    console.log(props);
    return(
        <div className = {classes.root}>
       <Chip position={'fixed'}
          margin = {'0em'} sm_margin = {'0em'}
          left = {'69em'}  sm_left = {'18em'}
          top = {'0.5em'}  sm_top = {'1em'}
          >
              <Paper variant="outlined"
              className={classes.chip}>              
                <Image image = {props.image}
                imageHandler={imageHandler}/>     
                 
                 <Text padding={'1em 1em'} size={'0.5em'} 
                  weight={'350'} spacing={'0.1em'} 
                  fontcolor = {" #33313b"} 
                  style={{margin : "2em 0em"}}>{props.name}</Text>
              </Paper>
          </Chip>
        <Grid container style={{zIndex : "0"}} >
        
          
        
        <Grid item xs={6} sm={3} className={classes.grid}>
          
          <Paper elevation={2} style={{backgroundColor : '#ffffff'}} className={classes.paper}>
              
                 <Paper className={classes.paper_head}
                 elevation={5}>
                   <Text
                   padding={'1em 0em'} size={'1.4em'} 
                   fontcolor = {"#ffffff"}
                   weight={'500'} spacing={'0.1em'}>Towny Dashboard</Text>
                    <Text
                    padding={'1em 0em'} size={'1em'} 
                    fontcolor = {"#ffffff"}
                    weight={'500'} spacing={'0.1em'}>Welcome {props.name}</Text>
                 </Paper>
                 {profileOptions.map((val,index) => <Paper className = {classes.paper_text} elevation={3} key={index}>
                 <Text  
                  className = {classes.text} 
                  padding={'1em 0em'} size={'1em'} 
                  fontcolor = {"#33313b"}
                  weight={'350'} spacing={'0.1em'} 
                  cursor = {'pointer'}
                  onClick = {() =>  val==='Sign Out'?{}:setOption(val) }>{val}</Text> 
                  </Paper>)}  
                                  

          </Paper>

        </Grid>

        <Grid item xs={6} sm={9} className={classes.grid}>
        
        <Paper elevation={2} className={classes.paper}>
            { option === 'User Profile' && <Form part = 'Dashboard-User_Profile' /> }
        
        </Paper>
        
        </Grid>

      </Grid>         
    </div>)
}
export default connect(mapStateToProps)(WorkerDashboard);



               
// {/* <div><img src={`${imageSelected}`}/></div> */}