const Puja = require('../model/pooja')
const details = require('../util/filehandling')

exports.getHomePage = (req, res) => {
    Puja.findAll({}).then(data => {
        if (req.session.role === "pandit") {
            res.render('panditDashboard',{
                puja: data,
                isLogin: req.session.isLogin
            })
        } else {
            res.render('index', {
                puja: data,
                isLogin: req.session.isLogin
            })
        }

        console.log(req.session.isLogin)
    }).catch(err => {
        console.log(err)
        res.send("error")
    })

}

exports.getAboutPage = (req, res) => {
    res.send("About page")
}

exports.getPuja = (req, res) => {
    Puja.findAll({
        where: {
            p_id: req.params.pname
        }
    }).then(data => {
        res.render('details', {
            title: data,
            body: details,
            isLogin: req.session.isLogin
        })
    }).catch(err => {
        console.log(err)
        res.send("error")
    })
}