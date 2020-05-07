const sequelize = require('../db/index');
const { Sequelize } = require('sequelize');

const Ticket = sequelize.define('Ticket',{
    id : {
        type : Sequelize.UUID,
        defaultValue : Sequelize.UUIDV1,
        primaryKey : true
    },
    booking_id :{
        type : Sequelize.UUID,
        allowNull : false
    },
    worker_id : {
        type : Sequelize.UUID,
        allowNull : false
    }
});


module.exports = Ticket;