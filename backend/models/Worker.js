
const sequelize = require('../db/index');
const { Sequelize } = require('sequelize');

const Worker = sequelize.define('Worker',{
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    mailId : {
        type : Sequelize.STRING,
        allowNull : false
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    mobileNumber : {
        type : Sequelize.INTEGER,
        allowNull : false,
        unique : true
    },
    specialisation : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    area : {
        type : Sequelize.STRING,
        allowNull : false
    }
}, { timestamps: false });


module.exports = Worker;