import {TICKET_STATUS, RETRIEVE_TICKET, UPDATE_TICKET, RESET_TICKETS, TICKET_ERROR} from '../Actions/ticket'
let ticketState = {
    message : '',
    tickets : [],
    Accepted : [],
    Completed : [],
    status : false
}

export const TicketReducer = ( state = ticketState, { type, payload}) => {
       let stateCopy = JSON.parse(JSON.stringify(state));
       switch( type ){
            case TICKET_STATUS :
                 stateCopy.message = payload;
                 return stateCopy;
            case RETRIEVE_TICKET :
                 stateCopy = {...stateCopy, tickets : payload, 
                    Accepted : payload.filter(val => val.Booking.status === 'Accept'),
                    Completed : payload.filter(val => val.Booking.status === 'Completed'), status : true};
                 return stateCopy;
            case UPDATE_TICKET :
                 stateCopy.message = payload;   
                 return stateCopy;           
            case TICKET_ERROR : 
                 stateCopy.message = payload;
                 return stateCopy;
            case RESET_TICKETS : 
                 return ticketState;                
            default :
               return stateCopy;    
                
       }
}