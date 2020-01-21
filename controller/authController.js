const User = require('../model/users')


// signup contollers 
exports.getSignUp = (req, res) => {
    const path = req.params.path 
    if(path==="user"){
        res.send("User Signup page!!")
    }else{
        res.send("Pandit Signup page!!")
    }
    
}

exports.postSignup = (req,res)=>{
    fName = req.body.fName
    lName= req.body.lName 
    email = req.body.email 
    password = req.body.password 
    address = req.body.address 
    User.create({
        f_name: fName,
        l_name: lName,
        email: email,
        password: password,
        address: address
    }).then(response=>{
        console.log(response)
        req.session.isLogin = true
        res.redirect('/')
        
    }).catch(err=>{
        console.log(err)
    })
}






//===========================================


// login controllers 

exports.getLogin = (req, res) => {
    const path = req.params.path
    if(path==="user"){
        res.render('login',{
            page: "User"
        })
    }else{
        res.render('login',{
            page: "Pandit"
        })
    }
}