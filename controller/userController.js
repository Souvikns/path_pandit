const User = require('../model/users')
const Pandit = require('../model/pandit')
const Order = require('../model/order')
const nodemailer = require('nodemailer')
const sengridTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sengridTransport({
    auth: {
        api_key: "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"
    }
}))

exports.getbookinPage = (req,res)=>{
    res.render('order',{
        isLogin: req.session.isLogin
    })
}


exports.postOrder = (req,res)=>{
    date = req.body.date 
    time = req.body.time 
    var userEmail = req.session.user.email
    var userAddress = req.session.user.address +" "+ req.session.user.city +" "+ req.session.user.pincode
    return res.redirect("/")
    Pandit.findAll({
        where: {
            city: req.session.user.city
        }
    }).then(data=>{
        return Order.create({
            userEmail: userEmail,
            userAddress: userAddress,
            date: date,
            time: time
        })

    }).then(response=>{
        console.log("Order taken")
        res.redirect('/')
        return transporter.sendMail({
            to: userEmail,
            from: 'souvikde.ns@gmail.com',
            subject: 'Order details',
            html: '<h1>order taken</h1>'
        })
    }).then(response=>{
        console.log('email send')
    }).catch(err=>{
        console.log(err)
    }).catch(err=>{
        console.log(err)
    })

    

}

