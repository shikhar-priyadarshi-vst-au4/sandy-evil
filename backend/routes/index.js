const router = require('express').Router();
const worker = require('./serviceprovider/worker');
const service = require('./serviceprovider/service');
const consumer = require('./consumer/profile');

router.use('/worker', worker);
router.use('/services', service );
router.use('/user', consumer);

module.exports = router;