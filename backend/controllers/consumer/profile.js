const passport = require('passport');
const Customer = require('../../models/Customer');
const {tokenGenerator} = require('../../config/Tokengenerate');


function controller(){
  this.register = ( req, res ) => {
      req.provider = 'Customer';
      passport.authenticate('register', {session : false}, async ( err, user, message ) => {
        if(err){
            res.status(500).json({ message : err.errors[0].message, 
                status : false, 
                error : true });
        }
        else if ( user ){
            res.json ( { ...message });
        }
      })( req, res);
  }
  this.login = ( req, res ) => {
      req.provider = 'Customer';
      passport.authenticate('login', { session : false }, async ( err, user, message ) => {
        if(err){
            res.status(500).json({ error : true, user, token:"", message });
        }
        else if(!user) {
            res.json({ error : false, user, token:"", message });
        }
        else {
          let token = await tokenGenerator(user.id);
                  if(token){
                      res.json({ error : false, user, token, message });
                  }
        }

      })(req, res)
  }
  this.isAuthorised = ( req, res, next ) => {
    req.provider = "Customer";
    passport.authenticate('jwt',{session : false}, ( err, user, message ) => {
        if(err){
            res.status(500).json({ error : err.errors[0].message });
        }
        else if(!user){
            res.json({ message :  "not authorised" })
        }
        else{
            res.locals.user = user;
            next();
        }
    })( req, res, next )
}
}

module.exports = new controller();