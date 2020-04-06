const router = require('express').Router();
const worker = require('./serviceprovider/worker');
const service = require('./serviceprovider/service');

router.use('/worker', worker);
router.use('/services', service );

module.exports = router;