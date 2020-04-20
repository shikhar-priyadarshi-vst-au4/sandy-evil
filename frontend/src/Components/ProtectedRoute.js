import React from 'react';
import {Route, Redirect} from 'react-router-dom'
export const ProtectedRoute = ( { component : Component, ...rest } ) => {    
    
    return(

     <Route {...rest} render = {
          props => {
               console.log(props);
                if(rest.isAuthenticated ){
                    return <Component {...rest} />
                }
                else{
                    return <div>loading....</div>
                    // return <Redirect to = {
                    //     {
                    //         pathname : '/',
                    //         state : {
                    //             from : rest.location
                    //         }
                    //     }
                    // }/>
                } 
          }
     }/>   
    
     )
}
