const sequelize = require('../db/index');
const { Sequelize } = require('sequelize');

const Ticket = sequelize.define('Ticket',{
    profile_id: {
        type : Sequelize.UUID,
        allowNull : false
    },
    customer_id :{
        type : Sequelize.UUID,
        allowNull : false
    },
    service: {
        type : Sequelize.ARRAY(Sequelize.STRING),
        allowNull : false
        },
    status : {
        type : Sequelize.ENUM,
        values: ['Active', 'Completed'],
        defaultValue : 'Active'
    }
}, { timestamps: false });


module.exports = Ticket;