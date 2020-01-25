const Sequelize = require('sequelize')

const sequelize = require('../database/connection')

const Pandit = sequelize.define('pandit',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    f_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    l_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pincode: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Pandit