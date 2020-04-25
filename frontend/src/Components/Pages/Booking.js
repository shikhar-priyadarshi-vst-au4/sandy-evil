import React, { Component, Fragment } from 'react';
import { Grid, withStyles } from "@material-ui/core";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { mapStateToProps } from '../StateTransition';


const styles = (theme) => ({
  root : {
    margin : '1em 1.8em'  
  },
  item : {
     border : '1px solid #272727',
     margin : '0em 0.2em'
  }
})

class Booking extends Component {
    componentDidMount(){

    }    
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
             <Grid container className={classes.root}>
                 <Grid item className={classes.item} xs={3}>1</Grid>
                 <Grid item className={classes.item} xs={5}>2</Grid>
                 <Grid item className={classes.item} xs={3}>3</Grid>
                 </Grid>    
            </Fragment>
        )
    }
}

export default compose(connect(mapStateToProps),withStyles(styles))(Booking);
