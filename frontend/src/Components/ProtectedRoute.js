import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isAuthorised} from '../Auth/Authenticate'
const ProtectedRoute = ({component : NewComponent, ...rest}) => {
    let WorkAuth = isAuthorised('access-token');
    let UserAuth = isAuthorised('customer-token'); 
    return <Route 
       render={(props)=>{
           if(WorkAuth || UserAuth){
               return <NewComponent {...props} {...rest}/>
           }
           else{
              return (<Redirect
              to = {{
                  pathname : `${rest.part==='dashboard'?'/careers':'/login'}`,
                  state : { from : props.location }
              }}/>)
           }
       }}
       />
}
export default ProtectedRoute;

                            


            
    

       
        

        