export const mapStateToProps = (state) => {
    let { AccountReducer : {
                            profileCreated,
                            isAuthenticated,
                            isLoggedIn,
                            response,
                            loginError,
                            error,
                            data}, 
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
