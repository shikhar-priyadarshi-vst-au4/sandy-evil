import { FetchAPI } from "./Fetch";
import { client_links } from './links'
//Action Constants
const SET_FILTER = 'SET_FILTER';
const ADD_SERVICES = 'ADD_SERVICES';
const REMOVE_SERVICES = 'REMOVE_SERVICES';
const CONFIRM_BOOKING = 'CONFIRM_BOOKING';
const BOOKING_FAILED = 'BOOKING_FAILED';
const BOOKING_ERROR = 'BOOKING_ERROR';
const WORKER_ASSIGNED = 'WORKER_ASSIGNED';
            export const FilterServices = (value) => {
               console.log(value);
                return ({
                    type : SET_FILTER,
                    payload : value
                })
            }

            export const AddServices = (id) => {
                return ({
                    type : ADD_SERVICES,
                    payload : id
                })
            }

            export const RemoveServices = (service) =>{
                return({
                    type : REMOVE_SERVICES,
                    payload : service
                })
            }
            export const ConfirmBooking = ({customer_id, service_id, domain,
            services, balance}) => {
                 let token = localStorage.getItem('customer-token');
                 console.log(token);
                   return dispatch => {
                    FetchAPI(`${client_links[4].createBooking}${customer_id}?jwt=${token}`,
                    {METHOD : 'POST', VALUE: {
                        service_id, domain, services, balance
                    }}, (error, data) => {
                         if(!error){
                             console.log(data);
                            if(data.status){
                                localStorage.setItem('booking-id',data.data.id);
                                return dispatch({
                                    type : CONFIRM_BOOKING,
                                    payload : data
                                })
                            }
                            return dispatch({
                                type : BOOKING_FAILED,
                                payload : data 
                            })
                         }
                         return dispatch({
                             type : BOOKING_ERROR
                         })
                    })
                   }
                    
            }

            export const assignBooking = (domain) => {
                
                let bookingId = localStorage.getItem('booking-id');
                
                return dispatch => {
                    FetchAPI(`${client_links[7].workerAssigned}${bookingId}/${domain}`,
                    {METHOD : 'PUT', VALUE : {}},(error, data) => {
                        console.log(data);
                        if(!error){
                            if(data.status){
                                return dispatch({
                                    type : WORKER_ASSIGNED,
                                    payload : data 
                                })
                            }
                            return dispatch({
                                type : BOOKING_ERROR,
                                payload : data
                            })
                        }
                        return dispatch({
                            type : BOOKING_FAILED,
                            payload : error
                        })
                    })
                }
                 
            }
            
export { SET_FILTER, ADD_SERVICES, 
         REMOVE_SERVICES, CONFIRM_BOOKING, 
         WORKER_ASSIGNED,BOOKING_FAILED, 
         BOOKING_ERROR};
