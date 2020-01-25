//importing modules

const express = require('express')
const isUser = require('../util/isUser')
const userController = require('../controller/userController')

//=============================


//middleware 
const router = express.Router()

//=============================



//Routes 

router.get('/order',isUser,userController.getbookinPage)


router.post('/order',isUser,userController.postOrder)

//=============================


module.exports = router