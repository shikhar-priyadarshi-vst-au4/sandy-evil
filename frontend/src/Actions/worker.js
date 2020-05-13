import {worker_links} from './links';
import {noToken} from './index'
import { FetchAPI } from './Fetch';
const IMAGE_UPDATE = 'IMAGE_UPDATE';
const IMAGE_ERROR = 'IMAGE_ERROR';
const FETCH_USER = 'FETCH_USER';
const ALLSERVICES = 'ALLSERVICES';
const FILTERSERVICE = 'FILTERSERVICE';
const SERVICEID = 'SERVICEID';
const UPDATE_DETAILS = 'UPDATE_DETAILS';

export const imageUpdate = ( file ) => {

    return async dispatch => {
            let getToken = localStorage.getItem('access-token');
            if(getToken){
                    let formData = new FormData();
                    formData.append('image',file);
                    let option = {
                        method : 'POST',
                        body : formData
                    };
                try{
                    let data = await (await fetch(`${worker_links[2].upload}${getToken}`, 
                    option)).json();
                    console.log(data);
                    return ({
                        type : IMAGE_UPDATE,
                        payload : data[1][0]
                    })                     
                }
                catch(err){
                   return ({
                       type : IMAGE_ERROR
                   })                    
                }
            }
            else {
            dispatch(noToken());
            }
        }     
   }
// export const extractUser = ( user ) => {
//     if(user){
//         return ({ 
//             type : FETCH_USER,
//             payload : user
//         })
//     }
//     return (logout());
// }
export const retrieveServices = (  ) => {
   return async dispatch => {
      
      //try{
          FetchAPI(`${worker_links[4].render}all`,{METHOD : 'GET', VALUE : {}},(error, services) => {
             
            if(!error){
                if(services){
                    return dispatch({
                        type : ALLSERVICES,
                        payload : services.data
                    })
                   
                 }
               }
               else{
                return dispatch({
                    type : 'ERROR'
                })
               }
          })
        //  let services = await (await fetch(`http://${HOST}:${PORT}${worker_links[4].render}all`,{
        //      method : 'GET',
        //      headers : {
        //          "Content-Type" : "application/json"
        //      }
        //  })).json();
        //  if(services){
        //     return dispatch({
        //         type : ALLSERVICES,
        //         payload : services.data
        //     })
           
        //  }
    //    }
    //    catch(error){
    //           return dispatch({
    //               type : 'ERROR'
    //           })
       //}
   }
}
export const categoryId = (work) => {
    console.log(work);
    return ({
        type : SERVICEID,
        payload : work.slice(0,1).toUpperCase().concat(work.slice(1))
    })
}
export const registerServices = ( data ) => {
       let {profile_id, category_id} = data;
       console.log(profile_id, category_id);
       if(!!profile_id && !!category_id){
        return async dispatch => {
            
                let getToken = localStorage.getItem('access-token');
                if(getToken){
               
                        FetchAPI(`${worker_links[5].getServices}${getToken}`,{ METHOD : 'POST',
                         VALUE : data},(error, result) => {
                             if(!error){
                                return dispatch({
                                    type : FILTERSERVICE,
                                    payload : result.data[0]
                                });
                             }
                             else{
                                return dispatch({
                                    type : 'ERROR'
                                })
                             }
                         })
                }
                return dispatch(noToken());
            }
        }
    }    
export const updateUser = ( data, property ) => {
    //update user creditenials
    console.log('Update');
}    
export { IMAGE_UPDATE, FETCH_USER, ALLSERVICES, FILTERSERVICE, SERVICEID, UPDATE_DETAILS };

