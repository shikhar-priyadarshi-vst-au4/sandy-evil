import { INPUT_ERROR, 
         RESPONSE_ERROR,
         CLOSE_MODAL, 
         CREATE_ACCOUNT,
         REMOVE_ERROR_ALERT } from '../Actions/index';


//initial state for workerReducer
let initState = {
    profileCreated : false,
    isAuthenticated : false,
    error : false,
    response : ""
}

export const workerReducer = (state = initState, action) => {
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
        case CREATE_ACCOUNT:
            stateCopy.response = action.payload;
            stateCopy.profileCreated = true;
            return stateCopy;
        case CLOSE_MODAL :
            stateCopy.profileCreated = false;   
            return stateCopy;
        case REMOVE_ERROR_ALERT :
            stateCopy.response = "";
            stateCopy.error = false;
            return stateCopy;    
        default : 
            return stateCopy;        
            
    }
}
