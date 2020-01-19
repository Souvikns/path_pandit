const Puja = require('../model/pooja')

exports.getHomePage = (req,res)=>{
    Puja.findAll({}).then(data=>{
        res.render('index',{puja: data})
    }).catch(err=>{
        console.log(err)
        res.send("error")
    })
    
}

exports.getAboutPage = (req,res)=>{
    res.render('index',{})
}

exports.getPuja = (req,res)=>{
    Puja.findAll({
        where: {
            p_id: req.params.pname
        }
    }).then(data=>{
        res.status(200).send(data)
    }).catch(err=>{
        console.log(err)
        res.send("error")
    })
}