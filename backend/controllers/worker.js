const { 
    tokenGenerator, 
    //tokenValidator 
                   } = require('../config/Tokengenerate');

function controller (){
    
    this.register = (req,res) =>{
                     
       if(req.user){
        res.json({
            msg : req.authInfo 
        })     
       } 
      else{
          res.status(505).json({
              msg: 'Internal Server Error'
          })
      }
    }
    this.login = async ( req, res) => {
        console.log(req.user.id);
        if(req.user){
            let token = await tokenGenerator(req.user.id);
            if(token){
                res.json({ token });
            }
            else{
                res.status(505).json({
                    msg: 'Internal Server Error'
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