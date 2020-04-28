import React, { Component, Fragment } from 'react';
import { Grid, withStyles } from "@material-ui/core";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { mapStateToProps } from '../StateTransition';
import { List } from '../General/index'
import { Navbar } from '../Navbar/Navbar'
import { CustomPosition } from '../Styled/Styled'
const styles = (theme) => ({
  root : {
    margin : '4em 0em',  
  },
  item : {
     margin : '0em 1em'
  }
})

class Booking extends Component {
    constructor(props){
      super(props)
      this.state={ filtered : [], addedServices:[], serviceId: "", 
      balance : 0, charges : 0, finalamount : 0 }
      this.setFilter=this.setFilter.bind(this);
      this.addService = this.addService.bind(this);
      this.removeService = this.removeService.bind(this);
      this.confirmBooking = this.confirmBooking.bind(this);
    }
    componentDidMount(){
      if(this.props.services.length>0){
        this.setState({filtered : this.props.services[0] })
      }
    }
    componentDidUpdate(prevProps){
      if(this.props.services!==prevProps.services){
        this.setState({filtered : this.props.services[0] })
      }
    }
     setFilter(val){
       this.setState({filtered : val, addedServices : [], serviceId : "",
      balance : 0, charges : 0, finalamount : 0});

     }
     addService(index){
       let filteredState = this.state.filtered;
       let addedServices = this.state.addedServices;
       if(!addedServices.includes(filteredState.services[index])){
        addedServices = [...addedServices, filteredState.services[index]];
        let balance =  addedServices.reduce((acc, curr) => {
                 acc+=curr.price;
                 return acc;
        },0)
        let charges = 0.05*balance;
        let finalamount = balance + charges;
         this.setState({
          ...{ addedServices },
          serviceId : filteredState.id,
          ...{balance}, ...{charges},
          ...{finalamount}
        })
       }
     }
      removeService(serviceName){
          let { addedServices, balance, 
               charges, finalamount } = this.state;
          
          if(addedServices.length>0){
            addedServices.map(({service, price}) => {
              if(service === serviceName.service){
                balance = balance - price;
                charges = balance*0.05;
                finalamount = balance + charges;
                this.setState({...{balance},...{charges},...{finalamount}});              
              }
              return ;
            })
            addedServices = addedServices?.filter(({service}) => service !== serviceName.service );
            this.setState({...{addedServices}})
          }
     }    
     confirmBooking(value){
         console.log('Confirm Booking');
     }
    render() {
        const {classes} = this.props;
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
                      setFilter={this.setFilter}/>
                      </Grid>
                      <Grid item className={classes.item} xs={5}>
                      <List part={'booking-page-services-category'}
                      addService={this.addService}
                      removeService={this.removeService}
                      {...this.state}/>
                      </Grid>
                      <Grid item className={classes.item} xs={4}>
                      <List part={'booking-page-payment'} {...this.state}/>
                      </Grid>
                 </Grid>             
                    
            </Fragment>
        )
    }
}

export default compose(connect(mapStateToProps),withStyles(styles))(Booking);


