const router = require('express').Router();
const { register, login, isAuthorised } = require('../../controllers/consumer/profile');

router.post('/register', register);
router.post('/login', login);
router.post('/auth', isAuthorised, (req,res)=>{
    res.send('valid token');
})
module.exports = router;