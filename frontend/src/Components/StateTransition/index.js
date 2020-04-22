export const mapStateToProps = (state) => {
    let { AccountReducer :{ profileCreated, isAuthenticated,
                            isLoggedIn, error,
                            response, loginError,
                            data },
         ProfileReducer : { id, image ,
                            name, email ,
                            number, specialisation ,
                            password, area },
         ServiceReducer : { services, filtered, category_id }                                        
         } = state;
    return({
            profileCreated, isAuthenticated, isLoggedIn,
            response, loginError, error, data, id, image, 
            name, email, number, specialisation, password, 
            area, services, filtered, category_id 
    })
}


// AccountReducer,
//             ProfileReducer,
//             ServiceReducer,
//             TicketReducer,
//             HistoryReducer