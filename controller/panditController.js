//importing modules 

//=========================================

//pandit dashboard 
exports.dashboard = (req,res)=>{
    res.render('panditDashboard',{
        puja: data,
        isLogin: req.session.isLogin
    })
}