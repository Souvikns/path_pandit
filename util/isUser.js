module.exports = (req,res,next)=>{
    if(!req.session.role==="user"){
        return res.redirect('/')
    }
    next()
}