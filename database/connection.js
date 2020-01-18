const Sequelize = require('sequelize')


const sequelize = new Sequelize(
    'sql12319155',
    'sql12319155',
    'CaWbezIpK8',
    {
        dialect: 'mysql',
        host: 'sql12.freesqldatabase.com',
    }
) 

module.exports = sequelize


