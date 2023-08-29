const { Sequelize, DataTypes, Model } = require('sequelize');
const  sequelize  = require('../config/db');

const Bot = sequelize.define('bot', {
    name: {
        type : DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: true,
    createdAt: true,
    updatedAt: true
});

module.exports = { Bot };

