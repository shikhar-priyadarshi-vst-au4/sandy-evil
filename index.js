const express=require('express');
const app=express();
const exphbs=require('express-handlebars');
const hbs=exphbs.create({
    extname:'.hbs'
       });
const db=require('./models/index');
const session=require('express-session');
app.use(session({
    name:'Flavor',
    secret:"jhjhjhjhjhjj23345jjjs",
    resave:false,
    cookie:{
        httpOnly:true,
        maxAge:30000,
        path:'/',
        sameSite:true,
        secure:false
    }
}));
app.use('/public',express.static('public'));
app.engine('.hbs',hbs.engine);
app.set('view engine','.hbs');
app.use(express.json());
app.use(express.urlencoded());
app.use(require('./app/routes/bookingroute'));
app.use('/paymentgate',require('./paytmroutes'));//DONE

db.connect().then(function(){
    app.listen('3000',function(){
        console.log("Server Started");
    })
}).catch(function(error){
    console.log(error);
});