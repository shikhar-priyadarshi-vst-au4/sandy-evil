export const mapStateToProps = (state) => {
    let { workerReducer : {
                            profileCreated,
                            isAuthenticated,
                            response,
                            error  }, 
         } = state;
    return({
            profileCreated,
            isAuthenticated,
            response,
            error 
    })
}
