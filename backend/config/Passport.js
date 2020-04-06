const passport = require ('passport');
const LocalStrategy = require ('passport-local').Strategy;
const Worker = require ('../models/Worker');


//Local strategy for register part.
passport.use('register', new LocalStrategy({
    usernameField : 'email',
    passReqToCallback: true
   }, async(req,email, password, done) =>{
       let { name, mobileNumber, specialisation, area } = req.body;
      try{
        let userFound = await Worker.findOne({where : {email}});
        if(userFound){
            done(null,userFound,'Email is already in use');
        }
        else{
            let createUser = await Worker.create({ name, email, password, mobileNumber,
            specialisation, area });
            done(null, createUser, 'Worker registered successfully');
        }
      }
      catch(error){
         done( error, false, error.message);
      }
}));

//Local strategy for Login part.
passport.use('login', new LocalStrategy(
    {
        usernameField : 'email',
        passReqToCallback: true
    },
   async ( req, email, password, done) => {
        try{
        let userFound = await Worker.findOne({where : {email, password}});      
          if(userFound){
            return done(null, userFound);
           }
           
            
           return done( null, false, { message :'Invalid email or password' });
           
        }
        catch(err){
            return done(err, false, err.message);
        }
}));

