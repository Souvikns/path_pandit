const Sequelize = require('sequelize')


const sequelize = new Sequelize(
    'tzWx3EMCM8',//datbase name 
    'tzWx3EMCM8',// username 
    'AZOa7XINSs',//password
    {
        dialect: 'mysql',
        host: 'remotemysql.com',//host 
    }
) 

module.exports = sequelize
