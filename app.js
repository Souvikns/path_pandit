//requiring modules 
const express = require('express')
const bodyParser = require('body-parser')

//================================


//middleware 

const app = express()

//================================



//Routing 

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

//================================



//port 

app.listen(3000,()=>{
    console.log("Server started at port 3000")
})

//================================