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
    services : {
        type : Sequelize.ARRAY(Sequelize.JSON),
        allowNull : false
    }
}, { timestamps: false });


module.exports = Service;