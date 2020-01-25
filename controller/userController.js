const User = require('../model/users')
const Pandit = require('../model/pandit')



exports.getbookinPage = (req,res)=>{
    res.render('order',{
        isLogin: req.session.isLogin
    })
}


exports.postOrder = (req,res)=>{
    date = req.body.date 
    time = req.body.time 
    User.findAll({
        where: {
            email: req.session.user.email
        }
    }).then(data=>{
        return Pandit.findAll({
            where: {
                city: data[0].city
            }
        })
    })
    .then(pdata=>{
        data = {
            date: date,
            time: time,
            user: data[0].city,
            pandit: pdata
        }
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
}

