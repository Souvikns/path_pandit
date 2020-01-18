//requiring modules 
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const session = require('express-session')
const sequelize = require('./database/connection')

//routers
const errorPage = require('./controller/error')
const homeRoute = require('./routes/home')
const userRoute = require('./routes/user')
const panditRoute = require('./routes/pandit')
const authRoute = require('./routes/auth')
//================================


//============================================


//middleware 

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(__dirname + "/public"))
app.use(
    session({ secret: 'my secret', resave: 'false', saveUninitialized: 'false' }
    ))


//================================



//Routing 

app.use(homeRoute)
app.use('/user', userRoute)
app.use('/pandit', panditRoute)
app.use('/auth', authRoute)

//================================

//Error Page 

app.use(errorPage.errorPage)

//================================


//port 

sequelize.sync()
    .then(res => {
        app.listen(3000, () => {
            console.log("Server started at port 3000")
        })
    })
    .catch(err => {
        console.log(err)
    })



//================================