import { INPUT_ERROR, 
         RESPONSE_ERROR,
         CLOSE_MODAL, 
         CREATE_ACCOUNT,
         LOGIN_ACCOUNT,
         LOGIN_ERROR,
         REMOVE_ERROR_ALERT } from '../Actions/index';


//initial state for workerReducer
let initState = {
    profileCreated : false,
    isAuthenticated : false,
    isLoggedIn : false,
    error : false,
    loginError : false,
    response : "",
    data : ""
}

export const AccountReducer = (state = initState, action) => {
    let stateCopy = {...state};
    switch(action.type){
        
        case INPUT_ERROR :
            stateCopy.response = action.payload;
            stateCopy.error = true;
            return stateCopy;
        case RESPONSE_ERROR :
            stateCopy.response = action.payload;
            stateCopy.error = true;
            return stateCopy;
        case LOGIN_ERROR :
            stateCopy.response = action.payload;
            stateCopy.loginError = true;    
            return stateCopy;
        case CREATE_ACCOUNT:
            stateCopy.response = action.payload;
            stateCopy.profileCreated = true;
            return stateCopy;
        case LOGIN_ACCOUNT : 
            stateCopy.data = {...action.payload.user};
            stateCopy.response = action.payload.message;
            stateCopy.isLoggedIn = true;
            stateCopy.isAuthenticated = true;
            return stateCopy;
        case CLOSE_MODAL :
            stateCopy[action.payload] = false;   
            return stateCopy;
        case REMOVE_ERROR_ALERT :
            stateCopy.response = "";
            if(stateCopy.error){
                stateCopy.error = false;
            }
            if(stateCopy.loginError){
                stateCopy.loginError = false;
            }
            return stateCopy;    
        case LOGOUT :
            // stateCopy.data = "";
            // stateCopy.profileCreated = false;
            // stateCopy.isAuthenticated = false;
            // stateCopy.isLoggedIn = false;
            // stateCopy.error = false;
            // stateCopy.loginError = false;
            // stateCopy.response = "";
            // stateCopy.data = "";
            return initState;    
        default : 
            return stateCopy;        
            
    }
}
