//requiring modules 
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

//routers
const errorPage = require('./controller/error')
const homeRoute = require('./routes/home')
const userRoute = require('./routes/user')
const panditRoute = require('./routes/pandit')


//================================


//middleware 

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine','ejs')
app.set('views','views')

app.use(express.static(__dirname+"/public"))

//================================



//Routing 

app.use('/home', homeRoute)
app.use('/user', userRoute)
app.use('/pandit', panditRoute)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

//================================

//Error Page 

app.use(errorPage.errorPage)

//================================


//port 

app.listen(3000,()=>{
    console.log("Server started at port 3000")
})

//================================