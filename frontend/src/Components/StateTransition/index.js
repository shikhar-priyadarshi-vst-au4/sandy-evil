export const mapStateToProps = (state) => {
    let { workerReducer : {
                            profileCreated,
                            isAuthenticated,
                            response,
                            loginError,
                            error,
                            data}, 
         } = state;
    return({
            profileCreated,
            isAuthenticated,
            response,
            loginError,
            error,
            data 
    })
}
