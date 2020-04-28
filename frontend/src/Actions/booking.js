//Action Constants
const SET_FILTER = 'SET_FILTER';
const ADD_SERVICES = 'ADD_SERVICES';
const REMOVE_SERVICES = 'REMOVE_SERVICES';
const CONFIRM_BOOKING = 'CONFIRM_BOOKING';


            export const FilterServices = (value) => {
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
            export const ConfirmBooking = () => {
                return({
                    type : CONFIRM_BOOKING
                })
            }
            
export { SET_FILTER, ADD_SERVICES, 
         REMOVE_SERVICES, CONFIRM_BOOKING};
