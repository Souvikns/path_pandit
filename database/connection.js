const Sequelize = require('sequelize')


const sequelize = new Sequelize(
    'sql12320072',
    'sql12320072',
    '6Kg8Y6KCpd',
    {
        dialect: 'mysql',
        host: 'sql12.freesqldatabase.com',
    }
) 

module.exports = sequelize


