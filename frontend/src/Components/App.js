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
       <ProtectedRoute path = {'/dashboard'}
                       isAuthenticated = {isAuthenticated} 
                       component = {WorkerDashboard} />   
       <Route path = {'*'} render ={ ( ) => <div>Error page</div> } />
     </Switch>
     
  );
  }
}

export default connect(mapStateToProps)(App);
       

