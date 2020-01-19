const Sequelize = require('sequelize')

const sequelize = require('../database/connection')

const Puja = sequelize.define('pooja', {
    p_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    p_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pcat: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    charset: 'latin1'
})

module.exports = Puja