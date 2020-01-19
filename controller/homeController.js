const Puja = require('../model/pooja')
const details = require('../util/filehandling')

exports.getHomePage = (req,res)=>{
    Puja.findAll({}).then(data=>{
        res.render('index',{puja: data})
    }).catch(err=>{
        console.log(err)
        res.send("error")
    })
    
}

exports.getAboutPage = (req,res)=>{
    res.send("About page")
}

exports.getPuja = (req,res)=>{
    Puja.findAll({
        where: {
            p_id: req.params.pname
        }
    }).then(data=>{
        res.render('details',{
            title: data,
            body: details
        })
    }).catch(err=>{
        console.log(err)
        res.send("error")
    })
}