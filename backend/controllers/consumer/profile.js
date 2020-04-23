const passport = require('passport');
const Customer = require('../../models/Customer');



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
}

module.exports = new controller();