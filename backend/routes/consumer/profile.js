const router = require('express').Router();
const { register } = require('../../controllers/consumer/profile');

router.post('/register', register);
// router.post('/login');
module.exports = router;