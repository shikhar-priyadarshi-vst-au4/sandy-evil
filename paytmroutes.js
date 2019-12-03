const router=require('express').Router();
const payroute=require('./app/routes/paytm');
router.use('/paytm',payroute);
module.exports=router;