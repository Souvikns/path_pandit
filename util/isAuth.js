module.exports = (req,res,next)=>{
    if(!req.session.isLogin){
        return res.redirect('/auth/user/login')
    }
    next()
}