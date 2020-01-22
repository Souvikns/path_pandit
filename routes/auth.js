//importing modules

const express = require('express')
const authController = require('../controller/authController')

//=============================


//middleware 

const router = express.Router()

//=============================


//Routes 

// Signup route
router.route('/:path/signup')
    .get(authController.getSignUp)

// router.route('/pandit/signup')
//     .get()



// Login route
router.route('/user/login')
    .get(authController.getLoginUser)
    .post(authController.postSignupUser)


// Pandit login route 

router.route('/pandit/login')
    .get(authController.getLoginPandit)
    .post(authController.postSignupPandit)
//pandit signup route 

router.get('/logout',authController.logout)




//=============================




module.exports = router