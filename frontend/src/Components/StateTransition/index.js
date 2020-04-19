export const mapStateToProps = (state) => {
    let { AccountReducer : {
                            profileCreated,
                            isAuthenticated,
                            isLoggedIn,
                            error,
                            response,
                            loginError,
                            data },
         ProfileReducer : { id,
                            image ,
                            name ,
                            email ,
                            number ,
                            specialisation ,
                            password ,
                            area },                     
         } = state;
    return({
            profileCreated,
            isAuthenticated,
            isLoggedIn,
            response,
            loginError,
            error,
            data,
            id,
            image ,
            name ,
            email ,
            number ,
            specialisation ,
            password ,
            area 
    })
}


// AccountReducer,
//             ProfileReducer,
//             ServiceReducer,
//             TicketReducer,
//             HistoryReducer