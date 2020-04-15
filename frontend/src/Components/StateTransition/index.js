export const mapStateToProps = (state) => {
    let { workerReducer : {
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
