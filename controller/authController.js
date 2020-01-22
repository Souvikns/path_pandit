// importing modules
const bcrypt = require('bcryptjs')
const User = require('../model/users')
const Pandit = require('../model/pandit')

//=============================================

// signup contollers 
exports.getSignUp = (req, res) => {
    const path = req.params.path
    if (path === "user") {
        res.send("User Signup page!!")
    } else {
        res.send("Pandit Signup page!!")
    }

}

exports.postSignupUser = (req, res) => {
    fName = req.body.fName
    lName = req.body.lName
    email = req.body.email
    password = req.body.password
    address = req.body.address
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
                    address: address
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
        path: "user"
    })
}

exports.getLoginPandit = (req, res) => {
    res.render('login', {
        page: "Pandit",
        path: "pandit"
    })
}


//Logout Controllers 

exports.logout = (req,res)=>{
    req.session.destroy(err=>{
        console.log(err)
        res.redirect('/')
    })
}