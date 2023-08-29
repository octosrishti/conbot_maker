const { Sequelize, DataTypes, Model } = require('sequelize');
const  sequelize  = require('../config/db');

const EndUser = sequelize.define('end_user', {
    firstName: {
        type : DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    indexes:[{unique: true, fields:["id", "email"]}]
});

module.exports = { EndUser };

