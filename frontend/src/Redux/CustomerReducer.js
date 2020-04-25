import { CUSTOMER_REGISTER,
         CUSTOMER_LOGIN,
         CUSTOMER_LOGOUT } from '../Actions/customer' 

const initState = {
    isCustomerAuthenticated :  false,
    customerName : "",
    customerEmail : "",
    customerPassword : "*******",
    customerNumber : "",
    customerArea : ""
}

export const CustomerReducer = ( state = initState,
    { type, payload } ) => {
      let stateCopy = {...state};
      switch(type){
          case CUSTOMER_REGISTER:
          case CUSTOMER_LOGIN:
          case CUSTOMER_LOGOUT:
          default:
              return stateCopy;            
      }
}