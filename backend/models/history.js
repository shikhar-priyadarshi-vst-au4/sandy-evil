const sequelize = require('../db/index');
const { Sequelize } = require('sequelize');

const History = sequelize.define('History',{
    id : {
        type : Sequelize.UUID,
        defaultValue : Sequelize.UUIDV1,
        primaryKey : true
    },
    worker_id : {
        type : Sequelize.UUID,
        allowNull : false
    },
    data : {
        type : Sequelize.Array(Sequelize.JSON),
        allowNull : false
    }
}, { timestamps: false });


module.exports = History;