import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Paper, Grid,
     makeStyles, List, 
     ListItem, ListItemAvatar, 
     ListItemText, Divider} from '@material-ui/core';
import { mapStateToProps } from '../StateTransition';
import {  Text } from '../Styled/Styled'
import { Image, Form } from '../General/index'
import { profileOptions } from '../Data/data'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow : 1
    },
    paper: {
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      height : "100%",
    },
    grid : {
    },
    paper_text : {
        textAlign : 'center', 
        margin : "0.2em 0em",
        ["&:hover"] : {
            backgroundColor : " #33313b",
        }
    },
    text : {
        ["&:hover"] : {
            backgroundColor : " #33313b",
            color : "#ffffff",
            fontWeight : "400",
        }
    }
  }));
const WorkerDashboard = ( props ) => {
    const [ imageSelected, setImageSelected ] = useState("");
    const [ option, setOption ] = useState("");
    const classes = useStyles();
    const imageHandler = ( event ) => {
      let file = event.target.files[0];
      console.log(file);
      setImageSelected(file.name);
    } 
    return(
        <div className = {classes.root}>
        <Grid container >
        
        <Grid item xs={6} sm={3} className={classes.grid}>
          
          <Paper elevation={2} style={{backgroundColor : '#ffffff'}} className={classes.paper}>
              
                <Image imageSelected={imageSelected}
                 imageHandler={imageHandler}/>     
                 
                 <Text padding={'0.5em 0em'} size={'1em'} 
                  weight={'350'} spacing={'0.1em'} 
                  fontcolor = {" #33313b"} style={{margin : "2em 0em"}}>Shikhar Priyadarshi</Text>
               
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
            { option === 'User Profile' && <Form part = 'Dashboard-User_Profile' />  }
        </Paper>
        
        </Grid>

      </Grid>         
    </div>)
}
export default connect(mapStateToProps)(WorkerDashboard);




// {/* <div><img src={`${imageSelected}`}/></div> */}