const express=require('express');
const app=express();
const exphbs=require('express-handlebars');
const hbs=exphbs.create({
    extname:'.hbs'
       });
const db=require('./models/index');
const mongoose = require('mongoose');
const session=require('express-session');
const passport=require('passport');
const flash=require('connect-flash');
const validator=require('express-validator');
const MongoStore=require('connect-mongo')(session);
require('./config/passport');
require('./controllers/tablebooking/controller');
app.use(session({
    name:'Flavor',
    secret:"jhjhjhjhjhjj23345jjjs",
    resave:false,
    store: new MongoStore({mongooseConnection:mongoose.connection}),
    cookie:{
        httpOnly:true,
        maxAge:300000,
        path:'/',
        sameSite:true,
        secure:false
        
    }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use('/public',express.static('public'));
app.engine('.hbs',hbs.engine);
app.set('view engine','.hbs');
app.use(express.json());
app.use(express.urlencoded());
app.use(validator());
app.use((req,res,next)=>{
    res.locals.login=req.isAuthenticated();
    res.locals.session=req.session;
    next();
})
app.use(require('./app/routes/bookingroute'));
app.use('/paymentgate',require('./paytmroutes'));//DONE
db.connect().then(function(){
    app.listen('3000',function(){
        console.log("Server Started");
    })
}).catch(function(error){
    console.log(error);
});