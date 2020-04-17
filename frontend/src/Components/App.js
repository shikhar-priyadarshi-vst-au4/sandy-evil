import React  from 'react';
import {  BrowserRouter as Router,
          Switch, 
          //Redirect,
          Route } from 'react-router-dom';
import { Main, Career, WorkerDashboard } from './Pages/index';
import 'typeface-roboto';
import { ProtectedRoute } from './ProtectedRoute';


export function App() {
  return (
    <Router>
     <Switch>
       <Route path = {'/'} exact component = {Main}/>
       <Route path = {'/careers'} component = {Career} />
       <Route path = {'/dummyprofilepage'} component={WorkerDashboard}/>
       <ProtectedRoute path = {'/worker/dashboard/:id'} 
                       isAuthenticated = {'false'} 
                       component = {<div></div>} />
       <Route path = {'*'} render ={ ( ) => <div>Error page</div> } />
     </Switch>
     </Router>
  );
}

/*{  }*/
       

