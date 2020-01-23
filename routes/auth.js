//importing modules

const express = require('express')
const authController = require('../controller/authController')

//=============================


//middleware 

const router = express.Router()

//=============================


//Routes 

// Signup route
router.route('/pandit/signup')
    .get(authController.getPanditSignup)
    .post(authController.postSignupPandit)


router.route('/user/signup')
    .get(authController.getuserSignUp)
    .post(authController.postSignupUser)

// router.route('/pandit/signup')
//     .get()



// Login route
router.route('/user/login')
    .get(authController.getLoginUser)
    .post(authController.postUserLogin)


// Pandit login route 


router.get('/pandit/login',authController.getLoginPandit)
router.post('/pandit/login',authController.postpanditLogin)


//   logout route 

router.get('/logout',authController.logout)




//=============================




module.exports = router