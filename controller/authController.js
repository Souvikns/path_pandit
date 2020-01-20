


// signup contollers 
exports.getSignUp = (req, res) => {
    const path = req.params.path 
    if(path==="user"){
        res.send("User Signup page!!")
    }else{
        res.send("Pandit Signup page!!")
    }
    
}






//===========================================


// login controllers 

exports.getLogin = (req, res) => {
    const path = req.params.path
    req.session.isLogin = false 
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