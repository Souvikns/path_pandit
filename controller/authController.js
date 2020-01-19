


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
    if(path==="user"){
        res.send("User Login page!!")
    }else{
        res.send("Pandit Login page!!")
    }
}