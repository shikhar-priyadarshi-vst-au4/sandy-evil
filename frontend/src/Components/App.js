import React  from 'react';
import {  BrowserRouter as Router,
          Switch, 
          //Redirect,
          Route } from 'react-router-dom';
import { Main, Career } from './Pages/index';
import 'typeface-roboto';
//import { ProtectedRoute } from './ProtectedRoute';


export function App() {
  return (
    <Router>
     <Switch>
       <Route path = {'/'} exact component = {Main}/>
       <Route path = {'/careers'} component = {Career} />
       <Route path = {'/worker/login'}  render={ ( ) => <div>worker login</div> } />
       <Route path = {'*'} render ={ ( ) => <div>Error page</div> } />
     </Switch>
     </Router>
  );
}

/*{ <ProtectedRoute path = {'/worker/dashboard/:id'} 
                       isAuthenticated = {'true'} 
                       component = {WorkerDashboard} /> }*/
       

