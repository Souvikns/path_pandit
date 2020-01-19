const Puja = require('../model/pooja')

exports.getHomePage = (req,res)=>{
    res.render('index',{})
}

exports.getAboutPage = (req,res)=>{
    res.render('index',{})
}

exports.getPuja = (req,res)=>{
    Puja.findAll({}).then(data=>{
        res.status(200).send(data)
    }).catch(err=>{
        console.log(err)
        res.send("error")
    })
}