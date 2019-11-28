const router=require('express').Router();
const passport=require('passport');
const controller=require('./../../controllers/tablebooking/controller');
router.get('/', controller.homepage);
router.get('/about',controller.aboutus);
router.get('/menu',controller.menupage);
router.get('/feedback',controller.feedback);
router.get('/booking/details',isLoggedIn,controller.retrieve);//RETRIEVING BOOKING PAGE.
router.get('/ADMIN_ACCESS',controller.retrieveAdminPage);//LOGIN AND SIGNUP 
//router.get('/LOGIN_ACCESS',controller.retrieveUserPage);//PAGE RETRIEVER.
router.get('/Admin_dashboard',controller.retrieveDashboard);//retrieve dashboard.
router.get('/unauthorised',controller.anuthorisedaccess);
router.get('/add-to-cart/:id',isLoggedIn,controller.addcart);
router.get('/shopping-cart',controller.shoppingcart);
router.post('/table/indices',controller.switchindices);
router.post('/tablematrix/update',controller.tableMatrix);
router.post('/admin_bookingticket',controller.adminbookingticket);
router.post('/create/booking',controller.createbooking);//REQUEST FOR MAKING A BOOKING. 
//router.post('/login',controller.userLogin);//REQUEST TO LOGIN
//router.post('/signup',controller.createAccount);//REQUEST TO CREATE A LOGIN ACCOUNT.
router.get('/logout',(req,res)=>{
    res.redirect('/');
})
router.get('/LOGIN_ACCESS',alreadyLoggedIn,(req,res)=>{
    var signup_messages=req.flash('signuperror');
    var signin_messages=req.flash('signinerror');
    console.log(signup_messages,signin_messages);
    res.render('Login',{
        CSSlink:'./../../public/stylesheet/Login.css',
            JSlink:'./../../public/JS-Frontend/booking.js',
            signin_messages:signin_messages,
            error:(signin_messages.length>0),
            signup_messages:signup_messages,
            flag:(signup_messages.length>0)
    })});
router.post('/signup',passport.authenticate('local.signup',{
    successRedirect:'/LOGIN_ACCESS',
    failureRedirect:'/LOGIN_ACCESS',
    failureFlash:true
}));
router.post('/login',passport.authenticate('local.signin',{
    successRedirect:'/',
    failureRedirect:'/LOGIN_ACCESS',
    failureFlash:true
}));
router.post('/admin',controller.adminlogin);
router.post('/logout',function(req,res,next){
    req.logout();
    res.redirect('/');
});
//router.use(controller.authentication);
function isLoggedIn(req,res,next){
    console.log("hello=",req.body);
    if(req.isAuthenticated()){
        return next();
    }
    else{
        res.redirect('/unauthorised');
    }
}
function alreadyLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        res.redirect('/');
    }
    else{
        return next();
    }
}
module.exports=router;