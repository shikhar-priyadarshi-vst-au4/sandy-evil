import React, { Component } from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux'
import { Paper, Grid,  withStyles} from '@material-ui/core';
import { mapStateToProps } from '../StateTransition';
import {  Text, Chip, Position } from '../Styled/Styled'
import { Image, List } from '../General/index'
import { profileOptions } from '../Data/data'

import { imageUpdate, 
          registerServices, 
          categoryId } from '../../Actions/worker';
import { createTicket, getTickets, updateTicket } from '../../Actions/ticket';  
import {logout, validateToken} from '../../Actions/index';
const styles = (theme) => ({
    root: {
      flexGrow : 1
    },
    paper: {
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      height : "2000px",
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
      // eslint-disable-next-line 
        ["&:hover"] : {
            backgroundColor : " #393e46",
            color : "#ffffff",
            fontWeight : "400",
        }
    }
  });
 class WorkerDashboard extends Component  {

    state={
      option : 'User Profile'
    }  
    componentDidUpdate(prevProps){
      if(this.props.isAuthenticated!==prevProps.isAuthenticated && !this.props.isAuthenticated){
        this.props.dispatch(validateToken());           
      }
      if(!!this.props.data){
        if(!this.props.message){
            this.props.dispatch(createTicket(this.props.data.id));
        }
        if(!this.props.tickets.length && !this.props.status){
          this.props.dispatch(getTickets(this.props.data.id))
        }
        if(!this.props.category_id && this.props.data.specialisation){
          this.props.dispatch(categoryId(this.props.data.specialisation));
        }
        else if(!this.props.filtered.length){
          this.props.dispatch(registerServices({profile_id : this.props.data.id,
             category_id : this.props.category_id}));
         }
      } 
   }
    imageHandler = ( event ) => {
      let file = event.target.files[0];
      console.log(file);
      if(file){
        this.props.dispatch(imageUpdate(file));
      }
    } 
    update = (worker_id, booking_id) => {
       this.props.dispatch(updateTicket(worker_id, booking_id));
    }
    Logout = () => {
      this.props.dispatch(logout())
    }
    render(){
      let {classes, data : { name, image }} = this.props; 
      return(
        <div className = {classes.root}>
       <Chip position={'absolute'}
          margin = {'0em'} sm_margin = {'0em'}
          left = {'69em'}  sm_left = {'17em'}
          top = {'0.5em'}  sm_top = {'1em'}>
              <Paper variant="outlined"
              className={classes.chip}>              
                <Image part={'dashboard'} image = {image}
                imageHandler={this.imageHandler}/>     
                 
                 <Text padding={'1em 1em'} size={'0.5em'} 
                  sm_size = {'0.5em'}
                  weight={'350'} spacing={'0.1em'} 
                  fontcolor = {" #33313b"} 
                  style={{margin : "3em 1em"}}>{name}</Text>
              </Paper>
          </Chip>
        <Grid container style={{zIndex : "0"}} >
        
          
        
        <Grid item xs={6} sm={3} className={classes.grid}>
        <Position position={'relative'} sm_margin={'0em'}
          margin={'0em'}>    
          
          <Paper elevation={2} style={{backgroundColor : '#ffffff'}} className={classes.paper}>
          <Position position={'fixed'} sm_margin={'0em'}
            style={{zIndex : '2'}}
             margin={'0em'}>    
        
                 <Paper className={classes.paper_head}
                 elevation={5}>
                   <Text sm_padding = {'1.5em 0.5em'}
                   padding={'2em 2em'} size={'1.4em'} 
                   sm_size = {'0.85em'}
                   fontcolor = {"#ffffff"}
                   weight={'500'} spacing={'0.1em'}>Towny Dashboard</Text>
                    <Text sm_padding = {'1.5em 0.5em'}
                    padding={'2em 2em'} size={'1em'} 
                    sm_size = {'0.85em'}
                    fontcolor = {"#ffffff"}
                    weight={'500'} spacing={'0.1em'}>Welcome {name}</Text>
                 </Paper>
                 {profileOptions.map((val,index) => <Paper className = {classes.paper_text} elevation={3} key={index}>
                 <Text  
                  className = {classes.text} 
                  padding={'1em 0em'} 
                  sm_padding={'1em 0em'} 
                  size={'1em'} 
                  sm_size = {'0.85em'}
                  fontcolor = {"#33313b"}
                  weight={'350'} spacing={'0.1em'} 
                  cursor = {'pointer'}
                  onClick = {() => this.setState({option : val})}>{val}</Text> 
                  </Paper>)}  
           </Position>                       
          </Paper>
          </Position>
          
        </Grid>

        <Grid item xs={6} sm={9} className={classes.grid}>
        <Position position={'relative'} sm_margin={'0em'}
          margin={'0em'}>    
        
        <Paper elevation={2} className={classes.paper}>
           
            { this.state.option === 'User Profile' && <List 
            {...this.props}
            part = {'dashboard-profile'}/>}
        
            { this.state.option === 'Account Settings' && <List 
            {...this.props}
            part = {'dashboard-settings'}/>}
            
            {this.state.option ==='Check Your Tickets' && <List {...this.props} 
            updateTicket = {this.update}
            part = {'dashboard-ticket'}/>}
            {this.state.option === 'Service Categories' && <List {...this.props} part = {'dashboard-categories'}/>} 
            {this.state.option === 'Check Your History' && 'Check Your History'}
            {this.state.option === 'Sign Out' && <List part={'dashboard-signout'} {...this.props} Logout={this.Logout}/>} 
        </Paper>
        </Position>
        </Grid>

      </Grid>         
    </div>)}
}
export default compose(connect(mapStateToProps),withStyles(styles))(WorkerDashboard);



