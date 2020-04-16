const { 
    tokenGenerator, 
    //tokenValidator 
                   } = require('../../config/Tokengenerate');


const passport = require('passport');

const {  uploader } = require('../../middleware/cloudinary');
const {  dataUri } = require('../../middleware/multer');

function controller (){
    
    this.register = ( req, res ) => {
        passport.authenticate('register', { session : false }, async ( err, user, message ) => {
            
            if(err){
                res.status(500).json({ message : err.errors[0].message, 
                    status : false, 
                    error : true });
            }
            else if ( user ){
                res.json ( { ...message });
            }
        })( req, res )
    } 
    this.login = ( req , res ) => {
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

    this.upload = async (req, res) => {
        if(req.file) {
        const file = dataUri(req).content;
        try{
           let result = await uploader.upload(file);
           const image = result.url;
           res.status(200).json({
              messge: 'Your image has been uploded successfully to cloudinary',
              data: {
              image
              }
              })
        }catch(err){
           res.status(400).json({
              messge: 'someting went wrong while processing your request',
              data: {
              err
              }
              })
          }
        }
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
    