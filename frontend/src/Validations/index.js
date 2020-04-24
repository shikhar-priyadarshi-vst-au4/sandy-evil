import validator from 'validator';

//email id validation
export const isEmail = (email) => {
    if(isEmpty(email)){
        if(!validator.isEmail(email)){
            return 'Incorrect email'
        }
    }
    else{
        return 'Enter your email id'
    }
    
}
//number validation
export const isNumber = (number) => {
    if(isEmpty(number)){
        if(!(validator.isMobilePhone(number) && 
        validator.isLength(number,{
            min : 10,
            max : 12
        }))){
            return `Enter your 10-digit number`;
        }
    }
    else{
        return 'Enter your number';
    }
}
//full name validation
export const isFullName = (fullname) => {
    if(isEmpty(fullname)){
        if(!validator.isAlpha()){
            return 'Name should be alphabetic'
        }
    }
    else{
        return 'Enter you name'
    }
}
//password validation
export const isPassword = (password) => {
    if(isEmpty(password)){
          if(!(validator.isAlphanumeric(password) &&
          validator.isLength(password, {
              min : 6,
              max : 10
          }))){
              return 'minimum 6 alphanumeric'
          }
    }
    else{
        return 'Enter password'
    }   
}
//empty field validation
export const isEmpty = (value) => {
    return validator.isEmpty(value)
}
