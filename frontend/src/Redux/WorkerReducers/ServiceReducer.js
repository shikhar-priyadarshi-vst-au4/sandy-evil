let categoryState = {
    services : [],
}


export const ServiceReducer = ( state = categoryState, { type, payload}) => {
    let stateCopy = { ...state };
    switch(type){
        case FETCHALL_SERVICES :
             stateCopy.services = [...payload]; 
             return stateCopy;
        default :
             return stateCopy;     
    }
}





