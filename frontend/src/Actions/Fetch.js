export const FetchAPI = async (LINK, {METHOD, VALUE} , cb) => {
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
