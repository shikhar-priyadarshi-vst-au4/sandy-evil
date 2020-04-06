const router = require('express').Router();

const { register, login, isAuthorised } = require('../../controllers/serviceprovider/worker');

// End-point to register worker
router.post('/register', register);

// End-point to login worker
router.post('/login', login);

// Auth-end-point
// controller.isAuthorised is authorisation middleware
router.post('/auth', isAuthorised, (req, res) => {
   res.send('access granted ');
})

module.exports = router;








































// router.post('/register', 
// passport.authenticate('register',{ session : false }),
// controller.register);



// router.post('/login', 
// passport.authenticate('login',{ session : false }),
// controller.login);

// router.post('/auth',passport.authenticate('jwt',{session : false}), ( req,res ) => {
//    res.json(req.user);
// })


// // router.post('/getuser', async (req,res) => {
// //   let data = await Worker.findAll({});
// //   res.json(data);
// // })

