import {client_links} from './links'
import {FetchAPI} from './Fetch'
const CUSTOMER_REGISTER = 'CUSTOMER_REGISTER';
const CUSTOMER_LOGIN = 'CUSTOMER_LOGIN';
const CUSTOMER_LOGOUT = 'CUSTOMER_LOGOUT';
const CUSTOMER_BOOKINGS = 'CUSTOMER_BOOKINGS';
const CLOSE_CUSTOMER_MODAL = 'CLOSE_CUSTOMER_MODAL';
const NOBOOKINGS = 'NOBOOKINGS';
const RESET_CUSTOMER_DATA = 'RESET_CUSTOMER_DATA';




export const customerRegister = (value) => {    
    
    return  dispatch => {
         FetchAPI(client_links[0].Register,
            {METHOD : 'POST', VALUE : value},( error, data ) => {
            if(!error){
                return dispatch({
                    type : CUSTOMER_REGISTER,
                    payload : data
                }) 
            }
         })
    }
}

export const customerLoginInitiate = (value) => {
    return  dispatch => {
        FetchAPI(client_links[1].Login, {METHOD : 'POST', VALUE : value},( error, data ) => {
            if(!error){
               let {token} = data;
               if(!!token){
                localStorage.setItem('customer-token',token)
                return dispatch({
                    type : CUSTOMER_LOGIN,
                    payload : data  
                })
               }
               
               return dispatch({
                   type : RESET_CUSTOMER_DATA
               }) 
            }
         })
      }  
    }
    
    export const customerLogoutInitiate = () => {
         localStorage.removeItem('customer-token');
         return ({
             type : CUSTOMER_LOGOUT
         })   
    }
    export const closeCustomerModal = (property) => {
        return ({
            type : CLOSE_CUSTOMER_MODAL,
            payload : property
        })
    }
    export const customerBookings = (customer_id) => {
        let token = localStorage.getItem('customer-token');
        if(!!token){
            return dispatch => {
                FetchAPI(`${client_links[5].getBookings}${customer_id}?jwt=${token}`,{METHOD : 'GET',
                 VALUE : {}}, (error, data) => {
                    
                    if(!error){
                         if(data.status){
                             
                             return dispatch({
                                 type : CUSTOMER_BOOKINGS,
                                 payload : data
                             })
                         }
                         return dispatch({
                             type : NOBOOKINGS,
                             payload : data
                         })
                     }
                 })
            }
        }
    }
export {
    CUSTOMER_REGISTER,
    CUSTOMER_LOGIN,
    CUSTOMER_LOGOUT,
    CUSTOMER_BOOKINGS,
    CLOSE_CUSTOMER_MODAL,
    NOBOOKINGS,
    RESET_CUSTOMER_DATA
} 

