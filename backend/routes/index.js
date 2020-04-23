const router = require('express').Router();
const worker = require('./serviceprovider/worker');
const service = require('./serviceprovider/service');
const consumer = require('./consumer/profile');
//worker or service-provider route
router.use('/worker', worker);
router.use('/services', service );
//consumer route
router.use('/user', consumer);

module.exports = router;