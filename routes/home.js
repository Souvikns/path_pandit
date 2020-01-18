//importing modules

const express = require('express')

//=============================


//middleware 

const router = express.Router()

//=============================


//Routes 

router.get('/as', (req, res) => {
    res.send("Hello")
})


//=============================




module.exports = router
