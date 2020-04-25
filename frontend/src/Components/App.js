import React, { 
  //useEffect, 
  Component, } from 'react';
import {  Switch, 
          Route } from 'react-router-dom';
import { Main, Career, WorkerDashboard } from './Pages/index';
import { connect } from 'react-redux'
import 'typeface-roboto';
import { ProtectedRoute }  from './ProtectedRoute';
import { mapStateToProps } from './StateTransition';
import { validateToken } from '../Actions/index';
import { retrieveServices } from '../Actions/worker'; 
import Account from './Pages/Account';

  class App extends Component {
   
  componentDidMount(){
    this.props.dispatch(validateToken());
    this.props.dispatch(retrieveServices());
  }  
  render(){
   let { isAuthenticated } = this.props;
  
  return (
     <Switch>
       <Route path = {'/'} exact component = {Main}/>
       <Route path = {'/careers'} component = {Career} />
       <Route path = {'/login'}  render={(props)=><Account part={'login'} {...props}/>}/> 
       <Route path = {'/signup'}  render={(props)=><Account part={'signup'} {...props}/>}/> 
       <ProtectedRoute path = {'/dashboard'}
                       isAuthenticated = {isAuthenticated} 
                       component = {WorkerDashboard} />   
       <Route path = {'*'} render ={ ( ) => <div>Error page</div> } />
     </Switch>
     
  );
  }
}

export default connect(mapStateToProps)(App);
       

