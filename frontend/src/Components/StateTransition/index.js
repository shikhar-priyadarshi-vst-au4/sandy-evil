export const mapStateToProps = (state) => {
    let { AccountReducer :{ profileCreated, isAuthenticated,
                            isLoggedIn, error,
                            response, loginError,
                            data },
         ServiceReducer : { services, filtered, category_id },
         CustomerReducer : { isCustomerAuthenticated,
             loggedIn, isRegister, customerData, bookings },
         BookingReducer : { filteredServices,
         addedServices, serviceId,
         balance, charges,
         finalamount, bookingdata, afterassigned, bookingError },
         TicketReducer : {
             message, tickets, Accepted, Completed, status
         }                                            
         } = state;
    return({
            profileCreated, isAuthenticated, isLoggedIn,
            response, loginError, error, data, services, filtered, category_id, isCustomerAuthenticated, 
            loggedIn, isRegister, customerData, bookings, filteredServices,
            addedServices, serviceId,
            balance, charges,
            finalamount, bookingdata, afterassigned, bookingError,
            message, tickets, Accepted, Completed, status
    })
}


