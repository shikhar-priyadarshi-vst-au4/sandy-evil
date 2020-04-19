import {HOST, PORT, links} from './links';
import {noToken, logout} from './index'
const IMAGE_UPDATE = 'IMAGE_UPDATE';
const IMAGE_ERROR = 'IMAGE_ERROR';
const FETCH_USER = 'FETCH_USER';
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
                    let data = await (await fetch(`http://${HOST}:${PORT}${links.upload}${getToken}`, 
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
export const extractUser = ( user ) => {
    if(user){
        return ({ 
            type : FETCH_USER,
            payload : user
        })
    }
    return (logout());
}
export const updateUser = ( data, property ) => {
    //update user creditenials
    console.log('Update');
}    
export { IMAGE_UPDATE, FETCH_USER, UPDATE_DETAILS };

