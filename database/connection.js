const Sequelize = require('sequelize')


const sequelize = new Sequelize(
    'path_puja',
    'root',
    'Souvik210899',
    {
        dialect: 'mysql',
        host: 'localhost',
    }
) 

module.exports = sequelize


