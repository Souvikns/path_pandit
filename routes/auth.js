//importing modules

const express = require('express')
const authController = require('../controller/authController')

//=============================


//middleware 

const router = express.Router()

//=============================


//Routes 

// Signup route
router.route('/signup')
    .get(authController.getSignUp)



// Login route
router.route('/login')
    .get(authController.getLogin)

//=============================




module.exports = router