export const mapStateToProps = (state) => {
    let { AccountReducer : {
                            profileCreated,
                            isAuthenticated,
                            isLoggedIn,
                            response,
                            loginError,
                            error,
                            data },
         ProfileReducer : {
                            imageUrl ,
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
            data 
    })
}


// AccountReducer,
//             ProfileReducer,
//             ServiceReducer,
//             TicketReducer,
//             HistoryReducer