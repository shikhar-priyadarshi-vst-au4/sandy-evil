import { CUSTOMER_REGISTER,
         CUSTOMER_LOGIN,
         CUSTOMER_LOGOUT,
        RESET_ALL } from '../Actions/customer' 

const initState = {
    isCustomerAuthenticated :  false,
    isRegister : false,
    loggedIn : false,
    customerData : ""
}

export const CustomerReducer = ( state = initState,
    { type, payload } ) => {
      let stateCopy = {...state};
      switch(type){
          case CUSTOMER_REGISTER:
              stateCopy.isRegister = payload;
              return stateCopy;
          case CUSTOMER_LOGIN:
              stateCopy.customerData = payload.data;
              stateCopy.isCustomerAuthenticated = payload.status;
              stateCopy.loggedIn = payload.status;
              return stateCopy;
          case CUSTOMER_LOGOUT:
          case RESET_ALL:
               return initState;
          default:
              return stateCopy;            
      }
}