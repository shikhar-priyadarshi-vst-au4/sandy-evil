import React, { Component } from 'react';
import {  Switch, Route } from 'react-router-dom';
import { Main, Career, WorkerDashboard, Account, Booking, User, Assign } from './Pages/index';
import { connect } from 'react-redux'
import   ProtectedRoute    from './ProtectedRoute';
import { mapStateToProps } from './StateTransition';
import { validateToken } from '../Actions/index';
import { tokenValidate } from '../Actions/Auth';
import { retrieveServices } from '../Actions/worker'; 

import 'typeface-roboto';

  class App extends Component {  
  componentDidMount(){
    this.props.dispatch(validateToken());
    this.props.dispatch(tokenValidate());
    this.props.dispatch(retrieveServices());
    
  } 
  componentDidUpdate(prevProps){
    if(prevProps.isAuthenticated!==this.props.isAuthenticated && !this.props.isAuthenticated){
      this.props.dispatch(validateToken());
    }
    if(prevProps.isCustomerAuthenticated!==this.props.isCustomerAuthenticated){
      this.props.dispatch(tokenValidate());
    }
  } 
  render(){
  return (
    
     <Switch>
       <Route path = {'/'} exact component = {Main}/>
       <Route path = {'/careers'} component = {Career} />
       <Route path = {'/login'}  render={(props)=><Account part={'login'} {...props}/>}/> 
       <Route path = {'/signup'}  render={(props)=><Account part={'signup'} {...props}/>}/> 
       <Route path = {'/booking/:serviceId'} exact component = {Booking}/>
       <Route path = {'/assign/:bookingId/:domain'} component={Assign}/>
       <ProtectedRoute path = {'/user'} component={User} {...this.props} part={'user'}/>
       {/* <ProtectedRoute path = {'/dashboard'} component={WorkerDashboard} {...this.props}
        part={'dashboard'}/>  
        */}
       <Route path = {'/dashboard'} component={WorkerDashboard}/>
       <Route path = {'*'} render ={ ( ) => <div>Error page</div> } />
     </Switch>
     
     
  );
  }
}

export default connect(mapStateToProps)(App);
       

