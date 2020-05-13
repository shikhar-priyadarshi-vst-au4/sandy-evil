import { FetchAPI } from './Fetch';
import { worker_links } from './links';

const TICKET_STATUS =  'TICKET_STATUS';
const RETRIEVE_TICKET = 'RETRIEVE_TICKET';
const UPDATE_TICKET = 'UPDATE_TICKET';
const RESET_TICKETS = 'RESET_TICKETS';
const TICKET_ERROR = 'TICKET_ERROR';

export const createTicket = (worker_id) => {
    return dispatch => {
       FetchAPI(`${worker_links[6].create}${worker_id}`,{METHOD : 'POST', VALUE : {}}, (error, result) => {
           if(!error){
               let { status, message } = result;
                if(status){
                    return dispatch({
                        type : TICKET_STATUS,
                        payload : message
                    })
                }
           }
           else{
               return dispatch({
                   type : TICKET_ERROR,
                   payload : error.message
               })
           }
       })
    }
}
export const getTickets = (worker_id) => {
    return dispatch => {
        FetchAPI(`${worker_links[7].retrieve}${worker_id}`,{METHOD : 'GET', VALUE : {}},(error, tickets)=>{
            if(!error){
                
                return dispatch({
                    type : RETRIEVE_TICKET,
                    payload : tickets.tickets
                })
                               
            }
            else{
                return dispatch({
                    type : TICKET_ERROR,
                    payload : error.message
                })
            }
        })
    }
}

export const updateTicket = (worker_id, booking_id) => {
    return dispatch => {
        FetchAPI(`${worker_links[8].update}${worker_id}/${booking_id}`,{
            METHOD : 'PUT',
            VALUE : {}
        },(error, update) => {
            console.log(error,update);
            if(!error){
                return dispatch({
                    type : UPDATE_TICKET,
                    payload : update 
                })        
            }
            else{
                return dispatch({
                    type : TICKET_ERROR,
                    payload : error.message
                })
            }
        })
    }
}


export const resetTickets = () => { return({type : RESET_TICKETS}) }

export { TICKET_STATUS, RETRIEVE_TICKET, UPDATE_TICKET, RESET_TICKETS,TICKET_ERROR };



    