const Sequelize = require('sequelize')


const sequelize = new Sequelize(
    'database-name',
    'username',
    'password',
    {
        dialect: 'mysql',
        host: 'host-name',
    }
) 

module.exports = sequelize


