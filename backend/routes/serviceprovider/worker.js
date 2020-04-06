const router = require('express').Router();
const passport = require('passport');

const controller = require('../../controllers/worker');

// const Worker = require('../../models/Worker');

// End-point to register worker
router.post('/register', controller.register);

// End-point to login worker
router.post('/login', controller.login);

// //Auth-end-point
router.post('/auth', controller.authenticate)

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

