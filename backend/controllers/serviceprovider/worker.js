const { 
    tokenGenerator, 
    //tokenValidator 
                   } = require('../../config/Tokengenerate');


const passport = require('passport');

function controller (){
    
    this.register = ( req, res ) => {
        passport.authenticate('register', { session : false }, async ( err, user, message ) => {
            
            if(err){
                res.status(500).json({ error : err.errors[0].message });
            }
            else if ( user ){
                res.json ( { message });
            }
        })( req, res )
    } 
    this.login = ( req , res ) => {
        passport.authenticate('login', { session : false }, async ( err, user, message ) => {
          if(err){
              res.status(500).json({ message });
          }
          else if(!user) {
              res.json({ message });
          }
          else {
            let token = await tokenGenerator(user.id);
                    if(token){
                        res.json({ token });
                    }
          }

        })(req, res)
    } 

    this.isAuthorised = ( req, res, next ) => {
        passport.authenticate('jwt',{session : false}, ( err, user, message ) => {
            if(err){
                res.status(500).json({ error : err.errors[0].message });
            }
            else if(!user){
                res.json({ message :  "not authorised" })
            }
            else{
                next();
            }
        })( req, res, next )
    }
    // this.authenticate = async ( req, res ) => {
    //    let token = req.header('auth-token');
    //    let id = tokenValidator(token);

    // }
}

module.exports = new controller();



// this.register = ( req, res ) => {              
       
    //     if(req.user){
    //     res.json({
    //         msg : req.authInfo 
    //     })     
    //    } 
    //   else{
    //       res.status(500).json({
    //           msg: 'Internal Server Error'
    //       })
    //   }
    // }
    


// this.login = async ( req, res) => {
    //     if(req.user){
    //         let token = await tokenGenerator(req.user.id);
    //         if(token){
    //             res.json({ token });
    //         }
    //         else{
    //             res.status(500).json({
    //                 msg: 'token generation failed'
    //             })
    //         }
    //     }
        
    // }
    