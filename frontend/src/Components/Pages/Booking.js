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
      this.state={ filtered : [], addedServices:[], serviceId: "" }
      this.setFilter=this.setFilter.bind(this);
      this.addService = this.addService.bind(this);
    }
    componentDidUpdate(prevProps){
      if(this.props.services!==prevProps.services){
        this.setState({filtered : this.props.services[0] })
      }
    }
     setFilter(val){
       this.setState({filtered : val})
     }
     addService(index){
       let filteredState = this.state.filtered;
       let services = this.state.addedServices;
       if(!services.includes(filteredState.services[index])){
        this.setState({
          addedServices : [...this.state.addedServices,filteredState.services[index]],
          serviceId : filteredState.id 
        })
       }
     }
     removeService(serviceName){
          let services = this.state.addedServices;
          services.filter((val, index) => val.service !== serviceName );
          console.log(services);
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


