const router = require('express').Router();
const worker = require('./serviceprovider/worker');
const service = require('./serviceprovider/service');
const ticket = require('./serviceprovider/ticket');
const consumer = require('./consumer/index');
const {Available} = require('../controllers/available/available');


router.get('/backend',(req,res)=>{
    res.send("<h1>Welcome to Towny</h1>");
})
//Available Workers
router.use(Available);
//worker or service-provider route
router.use('/worker', [worker,ticket]);
router.use('/services', service );

//consumer route
router.use('/user', consumer);
module.exports = router;

// '/worker/ticket/:worker_id' - create tickets for worker
// '/worker/retrieve/:worker_id' - retrieve all tickets for worker
// '/update/:worker_id/:booking_id' - update the status of a ticket/booking by worker