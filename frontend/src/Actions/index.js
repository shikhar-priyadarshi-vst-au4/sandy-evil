//Account Action constants
const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
const LOGIN_ACCOUNT = 'LOGIN_ACCOUNT';

//Error Action constants
const RESPONSE_ERROR = 'RESPONSE_ERROR';
const INPUT_ERROR = 'INPUT_ERROR';
const LOGIN_ERROR = 'LOGIN_ERROR';
const REMOVE_ERROR_ALERT = 'REMOVE_ERROR_ALERT';

//Modal Action constants
const CLOSE_MODAL = 'CLOSE_MODAL';

export const register = ({ name, email, 
                            password, mobileNumber,
                            specialisation, area }) => { 
    
      if( !name || !email || !mobileNumber || !password || !specialisation || !area ){
          return ({
              type : INPUT_ERROR,
              payload : 'Fill the remaining field'
          })
      }
      else {
         return async dispatch => {
             try{
                let { message, status, error } = await (await fetch('http://localhost:8000/worker/register',{
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({
                            name, email, 
                            password, mobileNumber,
                            specialisation, area
                    })
                })).json();
                if(!error){
                    if(status){
                        return dispatch({
                            type : CREATE_ACCOUNT,
                            payload : message
                       })
                    }
                    return dispatch({
                        type : INPUT_ERROR,
                        payload : message
                   })
                }
                else{
                     return dispatch({
                         type: RESPONSE_ERROR,
                         payload : message
                     })
                } 
             }
             catch(err){
                
                return dispatch(responseError(err));
             
            }
        }
     }                          
}

export const login = ({ email, password }) => {
      if(!email || !password){
        return ({
            type : INPUT_ERROR,
            payload : 'Fill the remaining field'
        })
      }
      else{
          return async dispatch => {
             try{
                 let { error, user, token, message } = await (await fetch('http://localhost:8000/worker/login',{
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({
                             email,  password
                    })})).json();
                 if( !error ){
                    if(!!token.length){
                        localStorage.setItem('access-token', token);
                        return dispatch({
                        type : LOGIN_ACCOUNT,
                        payload : { user , message }  
                       });
                    }
                    return dispatch({
                        type : LOGIN_ERROR,
                        payload : message
                    })   
                 }
                 return dispatch({
                     type : RESPONSE_ERROR,
                     payload : message
                 }) 
             }
             catch(err){
                 return dispatch(responseError(err));
             }
          }
      }
}
export const closeModal = (property) => {
     return ({
         type : CLOSE_MODAL,
         payload : property
     })
}

const responseError = (err) => {
    return ({
        type : RESPONSE_ERROR,
        payload : err.message
    })
}

export const removeError = ( ) =>{
    return ({
        type : REMOVE_ERROR_ALERT
    })
}

export { 
    INPUT_ERROR, 
    LOGIN_ERROR,
    RESPONSE_ERROR, 
    CREATE_ACCOUNT, 
    LOGIN_ACCOUNT,
    CLOSE_MODAL, 
    REMOVE_ERROR_ALERT}