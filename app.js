//requiring modules 
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const session = require('express-session')
const sequelize = require('./database/connection')
const mysqlStore = require('mssql-session-store')(session)
const path = require('path')

//routers
const errorPage = require('./controller/error')
const homeRoute = require('./routes/home')
const userRoute = require('./routes/user')
const panditRoute = require('./routes/pandit')
const authRoute = require('./routes/auth')
//================================


//============================================


//middleware 

var options = {
    connection: "http://www.phpmyadmin.co/sql.php?server=1&db=sql12319155",
    ttl: 3600,
    table: "session"
}

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname,'public')))
app.use(session({
    secret: 'mystring',
    resave: false,
    saveUninitialized: false
    //store: new mysqlStore(options)
}))


//================================



//Routing 

app.use(homeRoute)
app.use('/user', userRoute)
app.use('/pandit', panditRoute)
app.use('/auth',authRoute)

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