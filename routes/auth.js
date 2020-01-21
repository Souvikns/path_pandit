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
router.route('/:path/login')
    .get(authController.getLogin)
    .post(authController.postSignup)



//=============================




module.exports = router