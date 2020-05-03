const router = require('express').Router();
const {isAuthorised} = require('../../controllers/consumer/profile')
const { create, getInfo, assign, 
        cancel, gather, gatherAll} = require('../../controllers/consumer/booking');

//end-point to create a booking
router.post('/create/:customer_id', isAuthorised, create);

//end-point to gather all booking records of an individual
router.get('/retrieve/:customer_id', isAuthorised, getInfo);

//end-point to assign accept request by worker
router.put('/assign/:bookingId', 
//isAuthorised, 
            gather, assign);

//end-point to cancel the booking
router.delete('/cancel/:bookingId', isAuthorised, cancel);

router.get('/all', gatherAll)
module.exports = router;

