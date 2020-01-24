const Sequelize = require('sequelize')

const sequelize = require('../database/connection')

const Order = sequelize.define({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userEmail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    time: {
        type: Sequelize.TIME,
        allowNull: false
    }
})

module.exports = Order