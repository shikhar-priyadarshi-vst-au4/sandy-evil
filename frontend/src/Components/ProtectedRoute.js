import React from 'react';
import {Route, Redirect} from 'react-router-dom'

//dummy protected route created, might changed later.

export const ProtectedRoute = ( { component : Component, ...rest } ) => {
    return(

     <Route {...rest} render = {
          props => {
                if(props.isAuthenticated){
                    return <Component {...props} />
                }
                else{
                    return <Redirect to = {
                        {
                            pathname : '/',
                            state : {
                                from : props.location
                            }
                        }
                    }/>
                } 
          }
     }/>   
    
     )
}