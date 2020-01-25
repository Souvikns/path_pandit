// importing modules
const bcrypt = require('bcryptjs')
const User = require('../model/users')
const Pandit = require('../model/pandit')

//=============================================

// signup contollers 
exports.getuserSignUp = (req, res) => {
    res.render('signup', {
        page: "User",
        path: "user",
        isLogin: req.session.isLogin
    })
}

exports.getPanditSignup = (req,res)=>{
    res.render('signup',{
        page: "Pandit",
        path: 'pandit',
        isLogin: req.session.isLogin 
    })
}

//=============================================

//User signup post controller##############################
exports.postSignupUser = (req, res) => {
    fName = req.body.fName
    lName = req.body.lName
    email = req.body.email
    password = req.body.password
    address = req.body.address
    city = req.body.city 
    pincode = req.body.pincode 
    User.findOne({
        where: {
            email: email
        }
    }).then(data => {
        if (data) {
            return res.redirect('/auth/user/login')
        }
        return bcrypt.hash(password, 12)
            .then(hashedpassword => {
                return User.create({
                    f_name: fName,
                    l_name: lName,
                    email: email,
                    password: hashedpassword,
                    address: address,
                    city: city,
                    pincode: pincode
                })
            })
            .then(response => {
                console.log("User created")
                req.session.isLogin = true
                return req.session.save(err=>{
                    console.log(err)
                    res.redirect("/")
                })
            })
    })
        .catch(err => {
            console.log(err)
        })
}

//=============================================

// Pandit signup post controller##############################
exports.postSignupPandit = (req, res) => {
    fName = req.body.fName
    lName = req.body.lName
    email = req.body.email
    password = req.body.password
    address = req.body.address
    Pandit.findOne({
        where: {
            email: email
        }
    }).then(data => {
        console.log(data)
        if (data) {
            return res.redirect('/auth/user/login')
        }
        return bcrypt.hash(password, 12)
            .then(hashedpassword => {
                return Pandit.create({
                    f_name: fName,
                    l_name: lName,
                    email: email,
                    password: hashedpassword,
                    address: address
                })
            })
            .then(response => {
                console.log("User created")
                res.redirect('/')
            })
    })
        .catch(err => {
            console.log(err)
        })
}


//===========================================


// login controllers 

exports.getLoginUser = (req, res) => {
    res.render('login', {
        page: "User",
        path: "user",
        isLogin: req.session.isLogin 
    })
}
//=============================================

exports.getLoginPandit = (req, res) => {
    res.render('login', {
        page: "Pandit",
        path: "pandit",
        isLogin: req.session.isLogin 
    })
}

//=============================================

// user signup post login 
exports.postUserLogin = (req,res)=>{
    const email = req.body.email 
    const password = req.body.password 
    User.findOne({
        where: {
            email: email
        }
    }).then(data=>{
        if(!data){
            return res.redirect('/auth/user/login')
        }
        bcrypt.compare(password,data.password).then(doMatch=>{
            if(doMatch){
                req.session.isLogin = true
                req.session.user = data
                return req.session.save(err=>{
                    console.log(err)
                    res.redirect('/')
                })
            }
            res.redirect('/auth/user/login')
        })
    }).catch(err=>{
        console.log(err)
        res.redirect('/auth/user/login')
    })
}

//=================================================

// Pandit post login 

exports.postpanditLogin = (req,res)=>{
    const email = req.body.email 
    const password = req.body.password 
    Pandit.findOne({
        where: {
            email: email
        }
    }).then(data=>{
        if(!data){
            return res.redirect('/auth/pandit/signup')
        }
        bcrypt.compare(password,data.password)
        .then(doMatch=>{
            if(doMatch){
                req.session.isLogin = true
                req.session.user = data
                return req.session.save(err=>{
                    console.log(err)
                    res.redirect('/')
                })
            }
        })
    }).catch(err=>{
        console.log(err)
    })
}



//=================================================

//Logout Controllers 

exports.logout = (req,res)=>{
    req.session.destroy(err=>{
        console.log(err)
        res.redirect('/')
    })
}

//=============================================