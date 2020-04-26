import {client_links, HOST, PORT} from './links'
const CUSTOMER_REGISTER = 'CUSTOMER_REGISTER';
const CUSTOMER_LOGIN = 'CUSTOMER_LOGIN';
const CUSTOMER_LOGOUT = 'CUSTOMER_LOGOUT';

const RESET_ALL = 'RESET_ALL';

const FetchAPI = async (LINK, {METHOD, VALUE} , cb) => {
    let OPTION = {
        method : `${METHOD}`,
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(VALUE)
    } 
    try{
        let data = await (await fetch(`http://${HOST}:${PORT}${LINK}`, OPTION)).json();        
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
                    payload : data
                }) 
            }
         })
    }
}

export const customerLoginInitiate = (value) => {
    return  dispatch => {
        FetchAPI(client_links[1].Login, {METHOD : 'POST', VALUE : value},( error, data ) => {
            if(!error){
               let {token} = data;
               if(!!token){
                localStorage.setItem('customer-token',token)
                return dispatch({
                    type : CUSTOMER_LOGIN,
                    payload : data  
                })
               } 
               return dispatch({
                   type : RESET_ALL
               }) 
            }
         })
      }  
    }
    
    export const customerLogoutInitiate = () => {
         localStorage.removeItem('customer-token');
         return ({
             type : CUSTOMER_LOGOUT
         })   
    }

export {
    CUSTOMER_REGISTER,
    CUSTOMER_LOGIN,
    CUSTOMER_LOGOUT,
    RESET_ALL
} 

