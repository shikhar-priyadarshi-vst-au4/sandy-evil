const router=require('express').Router();
const controller=require('./../../controllers/tablebooking/controller');
router.get('/booking/details',controller.authentication,controller.retrieve);//RETRIEVING BOOKING PAGE.
router.get('/ADMIN_ACCESS',controller.retrieveAdminPage);//LOGIN AND SIGNUP 
router.get('/LOGIN_ACCESS',controller.retrieveUserPage);//PAGE RETRIEVER.
router.get('/Admin_dashboard',controller.authentication,controller.retrieveDashboard);//retrieve dashboard.
router.post('/create/booking',controller.createbooking);//REQUEST FOR MAKING A BOOKING. 
router.post('/login',controller.userLogin);//REQUEST TO LOGIN
router.post('/signup',controller.createAccount);//REQUEST TO CREATE A LOGIN ACCOUNT.
router.post('/admin',controller.adminlogin);
router.post('/logout',controller.logout);
router.use(controller.authentication);
module.exports=router;