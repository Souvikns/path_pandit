//importing modules

const express = require('express')
const homeController = require('../controller/homeController')
const isAuth = require('../util/isAuth')

//=============================


//middleware 

const router = express.Router()

//=============================


//Routes 

router.route('/')
.get(homeController.getHomePage)

router.get('/about',isAuth,homeController.getAboutPage)

router.get('/:pname',homeController.getPuja)

//=============================




module.exports = router
