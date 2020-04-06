const passport = require ('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Worker = require('../models/Worker');

let option = {
    jwtFromRequest :  ExtractJwt.fromUrlQueryParameter('jwt'),
    secretOrKey : "Express"
    }


//passport-jwt strategy for verifying token.
passport.use('jwt',new JwtStrategy( option, async (jwt_payload, done) => {
    console.log(jwt_payload);
let user = await Worker.findOne( {where: {id: jwt_payload.sub}});  
try{
if (user) {
    console.log(user);
    return done(null, user);
} else {
   
    return done(null, "user not registered");

    // or you could create a new account
}
}
catch(err){
    console.log(err.message);
    return done(err, false);
}
}));