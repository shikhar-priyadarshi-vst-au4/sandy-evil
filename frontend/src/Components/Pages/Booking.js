import React, { Component, Fragment } from 'react';
import { Grid, Paper, withStyles, makeStyles, Typography, Button } from "@material-ui/core";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { mapStateToProps } from '../StateTransition';
import { List } from '../General/index'
import  Navbar  from '../Navbar/Navbar'
import { FilterServices, AddServices,
         RemoveServices, ConfirmBooking } from '../../Actions/booking'
// import { Redirect } from 'react-router-dom';
const styles = (theme) => ({
  root : {
    margin : '4em 0em',  
  },
  item : {
     margin : '0em 1em'
  }
})

const useStyles = makeStyles(theme => ({
  root : {
    margin : theme.spacing(3),
    padding : theme.spacing(1),
  },
  text : {
    margin : theme.spacing(2),
  },
  info:{
    margin : theme.spacing(5),
  },
  button : {
    margin : theme.spacing(2)
  },
}))
 
const Clickable = ({...rest}) => {
  let classes = useStyles();
  return(
    <Button className={classes.button}
    variant={`${rest.children==='Homepage'?'text':'contained'}`} 
    color = {`${rest.children==='Homepage'?'':'secondary'}`}
    onClick={()=>{
      rest.history.push(`${rest.children==='Homepage'?'/':'/user'}`)
    }}>
      {rest.children}
    </Button>
  )
}

const ErrorAlert = ({bookingError, ...rest}) => {
  let classes = useStyles();
    
  return (<Paper variant={'outlined'} className={classes.root}>
     <Grid container>
     <Typography className={classes.text} variant={'h4'}>Towny</Typography>
     <Clickable {...rest}>Homepage</Clickable>
     <Clickable {...rest}>Profile</Clickable>
     </Grid>
      <Typography variant={'body1'} className={classes.info}>{`Sorry for inconvenience, 
      ${bookingError}. Please try again later.`}</Typography>
  </Paper>)
}


class Booking extends Component {
    constructor(props){
      super(props)
      this.revertFilter=this.revertFilter.bind(this);
      this.addService = this.addService.bind(this);
      this.removeService = this.removeService.bind(this);
      this.confirmBooking = this.confirmBooking.bind(this);
    }
    componentDidMount(){
      if(this.props.services.length>0){
         this.revertFilter();
      }
    }
    componentDidUpdate(prevProps){
      if(this.props.services!==prevProps.services){
        this.revertFilter();
      }
      if(this.props.match.params.serviceId!==prevProps.match.params.serviceId){
        this.revertFilter();
      }
      if(this.props.bookingdata!==prevProps.bookingdata){
        let { serviceId } = this.props;
        let domain = this.props.services.find(val => val.id === serviceId);
        let {id : bookingId} = this.props.bookingdata; 
        this.props.history.push(`/assign/${bookingId}/${domain.category}`) 
      }
    }
     revertFilter(){
      let { match : {
        params : { serviceId : id }
      }, services} = this.props;
      let value = services.find(val => val.id === id);
      console.log(value);
      this.props.dispatch(FilterServices(value)) 
    }  
     addService(index){
       this.props.dispatch(AddServices(index));
     }
      removeService(serviceName){
       this.props.dispatch(RemoveServices(serviceName));   
     }    
     confirmBooking(){
      localStorage.removeItem('booking-id');
      let { customerData : { id : customer_id }, serviceId : service_id,
        addedServices: services, finalamount : balance } = this.props;
        let domain = this.props.services.find(val => val.id === service_id);
        console.log(domain.category);
        if(domain){
          let value = {customer_id, service_id, domain : domain.category, services, balance }
          this.props.dispatch(ConfirmBooking(value));
        }
      }
    render() {
        const {classes} = this.props;
        if(!!this.props.bookingError){
        return (<ErrorAlert bookingError={this.props.bookingError}
          {...this.props}/>)
        }
        return (
            <Fragment>
              <Navbar 
              mainBar={[{ navLinkName : "Login", path : '/login'},{ navLinkName : "Create Account", path : '/signup'}]} 
                    top={'0em'} radius={'0em'} />
             <Grid container className={classes.root}>
                      <Grid item className={classes.item} xs={2}>
                      <List part={'booking-page-services'} categories={
                        this.props.services
                      } 
                      {...this.props}/>
                      </Grid>
                      <Grid item className={classes.item} xs={5}>
                      <List part={'booking-page-services-category'}
                      addService={this.addService}
                      removeService={this.removeService}
                      {...this.props}/>
                      </Grid>
                      <Grid item className={classes.item} xs={4}>
                      <List part={'booking-page-payment'} {...this.props} confirmBooking={this.confirmBooking}/>
                      </Grid>
                 </Grid>             
                    
            </Fragment>
        )
    }
}

export default compose(connect(mapStateToProps),withStyles(styles))(Booking);

































