//importing modules

const express = require('express')
const panditController = require('../controller/panditController')

//=============================


//middleware 
const router = express.Router()

//=============================



//Routes 

router.get('/dashboard',panditController.dashboard)


//=============================


module.exports = router