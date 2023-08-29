const { Sequelize, DataTypes, Model } = require('sequelize');
const  sequelize  = require('../config/db');

const Conversation = sequelize.define('conversation', {
    
},{
    timestamps: true,
    createdAt: true,
    updatedAt: true
})



module.exports = { Conversation };

