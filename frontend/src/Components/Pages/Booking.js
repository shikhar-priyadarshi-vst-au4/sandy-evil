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
    margin : '1em 1.8em'  
  },
  item : {
     margin : '0em 0em'
  }
})

class Booking extends Component {
    componentDidMount(){

    }    
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
              <Navbar 
              mainBar={[{ navLinkName : "Login", path : '/login'},{ navLinkName : "Create Account", path : '/signup'}]} 
                      position={'static'} top={'0em'} left={'0em'} index={'0'} width={'100%'}
                      border={'0px'} sm_top={'0em'} sm_left={'0em'}  
                      sm_width={'100%'} radius={'0em'} navElem={'static'}/>
             <Grid container className={classes.root}>
                      <Grid item className={classes.item} xs={3}>
                      <List part={'booking-page-services'} categories={
                        this.props.services
                      }/>
                      </Grid>
                      <Grid item className={classes.item} xs={5}>
                      <List part={'booking-page-services-category'}/>
                      </Grid>
                      <Grid item className={classes.item} xs={3}>
                      <List part={'booking-page-payment'}/>
                      </Grid>
                 </Grid>
                    
            </Fragment>
        )
    }
}

export default compose(connect(mapStateToProps),withStyles(styles))(Booking);
