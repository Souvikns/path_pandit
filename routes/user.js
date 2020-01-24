//importing modules

const express = require('express')

//=============================


//middleware 
const router = express.Router()

//=============================



//Routes 

router.get('/order',(req,res)=>{
    res.render('order',{
        isLogin: req.session.isLogin
    })
})


router.post('/order',(req,res)=>{
    date = req.body.date 
    time = req.body.time 
    data = {
        date: date,
        time: time
    }
    res.send(data)
})

//=============================


module.exports = router