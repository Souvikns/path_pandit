//importing modules

const express = require('express')
const homeController = require('../controller/homeController')

//=============================


//middleware 

const router = express.Router()

//=============================


//Routes 

router.route('/')
.get(homeController.getHomePage)

router.route('/about')
.get(homeController.getAboutPage)

router.get('/:pname',homeController.getPuja)

//=============================




module.exports = router
