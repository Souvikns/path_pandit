//requiring modules 
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const errorPage = require('./controller/error')

//================================


//middleware 

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine','ejs')
app.set('views','views')

app.use(express.static(__dirname+"/public"))

//================================



//Routing 

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