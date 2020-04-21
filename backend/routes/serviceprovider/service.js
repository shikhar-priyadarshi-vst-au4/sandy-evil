const router = require('express').Router();

const { isAuthorised } = require('../../controllers/serviceprovider/worker');

const { inject, render } = require('../../controllers/serviceprovider/service')

router.post('/add/services', isAuthorised, ( req, res) => {
    console.log('Work in progress');
})

// to use inject services in DB
router.post('/inject', inject);
router.get('/render', render);
module.exports = router;