
let profileState = {
    imageUrl : "",
    name : "",
    email : "",
    number : "",
    specialisation : "",
    password : "",
    area : ""
} 


export const ProfileReducer = (state = profileState, { type, payload } ) => {
      let stateCopy = { ...state };
      switch( type ){
          case RETRIEVE_IMAGE_URL :
              stateCopy.imageUrl = payload;
              return stateCopy;
          case UPDATE_DETAILS : 
               let { property, data } = payload;
               stateCopy[property] = data;
               return stateCopy;
          default :
               return stateCopy;
    }
}


// payload : { 
//     property : 'number',
//     data : 23432423423    
// }