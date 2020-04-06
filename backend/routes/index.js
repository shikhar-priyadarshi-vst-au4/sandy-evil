const router = require('express').Router();
const worker = require('./serviceprovider/worker');

router.use('/worker', worker);

module.exports = router;