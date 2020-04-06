const router = require('express').Router();

const { isAuthorised } = require('../../controllers/serviceprovider/worker');

router.post('/add-services', isAuthorised, ( req, res) => {
    res.send('add services');
})

module.exports = router;