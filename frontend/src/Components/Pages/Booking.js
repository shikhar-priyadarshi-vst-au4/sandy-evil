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
      this.state={filtered : []}
      this.setFilter=this.setFilter.bind(this);
    }
    componentDidUpdate(prevProps){
      if(this.props.services!==prevProps.services){
        this.setState({filtered : this.props.services[0] })
      }
    }
     setFilter(val){
       this.setState({filtered : val})
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
                      {...this.state}/>
                      </Grid>
                      <Grid item className={classes.item} xs={4}>
                      <List part={'booking-page-payment'}/>
                      </Grid>
                 </Grid>             
                    
            </Fragment>
        )
    }
}

export default compose(connect(mapStateToProps),withStyles(styles))(Booking);


