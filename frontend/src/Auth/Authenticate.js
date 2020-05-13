//just check whether there is token or not
export const isAuthorised = (key) => {
    let token = localStorage.getItem(key);
    return token?true:false;
}