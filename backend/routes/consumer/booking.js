const router = require('express').Router();
const {isAuthorised} = require('../../controllers/consumer/profile')



router.post('/create/:customer_id', isAuthorised );


module.exports = router;

//booking apis ->
//