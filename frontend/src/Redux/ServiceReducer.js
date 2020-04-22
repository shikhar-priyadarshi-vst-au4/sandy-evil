import {ALLSERVICES, SERVICEID} from "../Actions/worker"
let categoryState = {
    services : [],
    filtered : [],
    category_id : ""
}


export const ServiceReducer = ( state = categoryState, { type, payload}) => {
    let stateCopy = { ...state };
    switch(type){
        case ALLSERVICES :
             stateCopy.services = [...payload]; 
             console.log(stateCopy.services);
             return stateCopy;  
        case SERVICEID :
             console.log("payload", payload);
             console.log(stateCopy.services);
             let data = stateCopy.services.find((val) => val.category === payload);
             console.log(data);
             stateCopy.category_id = data.id;
             return stateCopy;       
        default :
             return stateCopy;     
    }
}





