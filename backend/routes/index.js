const router = require('express').Router();
const worker = require('./serviceprovider/worker');
const service = require('./serviceprovider/service');
const ticket = require('./serviceprovider/ticket');
const consumer = require('./consumer/index');
const {Available} = require('../controllers/available/available');

//Available Workers
router.use(Available);

//worker or service-provider route
router.use('/worker', [worker,ticket]);
router.use('/services', service );

//consumer route
router.use('/user', consumer);
module.exports = router;