//importing modules

const express = require('express')
const islogin = require('../util/isAuth')
const isUser = require('../util/isUser')
const User = require('../model/users')
const userController = require('../controller/userController')

//=============================


//middleware 
const router = express.Router()

//=============================



//Routes 

router.get('/order',islogin,isUser,userController.getbookinPage)


router.post('/order',islogin,isUser,userController.postOrder)

//=============================


module.exports = router