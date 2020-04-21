const sequelize = require('../db/index');
const { Sequelize } = require('sequelize');

const Service = sequelize.define('Service',{
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true 
    },
    profile_id : {
        type : Sequelize.UUID,
        allowNull : false
    },
    service_name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    service_charge : {
        type : Sequelize.DOUBLE,
        allowNull : false
    }
}, { timestamps: false });


module.exports = Service;