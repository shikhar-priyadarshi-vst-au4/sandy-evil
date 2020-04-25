import {client_links} from './links'
const CUSTOMER_REGISTER = 'CUSTOMER_REGISTER';
const CUSTOMER_LOGIN = 'CUSTOMER_LOGIN';
const CUSTOMER_LOGOUT = 'CUSTOMER_LOGOUT';


const FetchAPI = async (LINK, {METHOD, VALUE} , cb) => {
    let OPTION = {
        method : `${METHOD}`,
        header : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(VALUE)
    }  
    try{
        let data = await (await fetch(LINK, OPTION)).json();
        if(data){
            return cb (null, data);
        }
      }
      catch(error){
          return cb(error, null)
      }
}



export const customerRegister = (value) => {    
    return  dispatch => {
         FetchAPI(client_links[0].Register,
            {METHOD : 'POST', VALUE : value},( error, data ) => {
            if(!error){
               return dispatch({
                   type : CUSTOMER_REGISTER,
                   data 
               }) 
            }
         })
    }
}

export const customerLogin = (value) => {
    return  dispatch => {
        FetchAPI(client_links[1].Login, {METHOD : 'POST', VALUE : value},( error, data ) => {
            if(!error){
               return dispatch({
                   type : CUSTOMER_LOGIN,
                   data 
               }) 
            }
         })
      }  
    }

export {
    CUSTOMER_REGISTER,
    CUSTOMER_LOGIN,
    CUSTOMER_LOGOUT
} 

