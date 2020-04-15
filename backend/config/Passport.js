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
            done(null,userFound,{message : 'Email is already in use', 
            status: false, error : false} );
        }
        else{
            let createUser = await Worker.create({ name, email, password, mobileNumber,
            specialisation, area });
            done(null, createUser, {message : 'Worker registered successfully', 
            status: true, error : false});
        }
      }
      catch(err){
          
         done( err, false );
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
            return done(null, userFound, 'Logged in successfully');
           }
           
            
           return done( null, false, 'Invalid email or password' );
           
        }
        catch(err){
            return done(err, false, err.message);
        }
}));

