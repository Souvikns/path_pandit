module.exports = (req,res,next)=>{
    if(!req.session.isLogin){
        return res.redirect('/auth/user/login')
    }
    if(req.session.role ==="pandit"){
        return res.redirect('/')
    }
    next()
}