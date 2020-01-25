const User = require('../model/users')
const Pandit = require('../model/pandit')
const Order = require('../model/order')



exports.getbookinPage = (req,res)=>{
    res.render('order',{
        isLogin: req.session.isLogin
    })
}


exports.postOrder = (req,res)=>{
    date = req.body.date 
    time = req.body.time 
    Pandit.findAll({
        where: {
            city: req.session.user.city
        }
    }).then(data=>{
        var userEmail = req.session.user.email
        var userAddress = req.session.user.address +" "+ req.session.user.city +" "+ req.session.user.pincode
        return Order.create({
            userEmail: userEmail,
            userAddress: userAddress,
            date: date,
            time: time
        })

        res
    }).then(response=>{
        console.log("Order taken")
        return res.redirect('/')
    }).catch(err=>{
        console.log(err)
    })

    

}

