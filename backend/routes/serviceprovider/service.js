const router = require('express').Router();

const { isAuthorised } = require('../../controllers/serviceprovider/worker');

const { inject, render,
        register, retrieve } = require('../../controllers/serviceprovider/service')

router.post('/register', isAuthorised, register);
router.post('/retrieve', isAuthorised, retrieve);
// to inject services in DB
router.post('/inject', inject);
// to render services from DB
router.get('/render', render);
module.exports = router;