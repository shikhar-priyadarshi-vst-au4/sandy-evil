const sequelize = require('../db/index');
const { Sequelize } = require('sequelize');

const Booking = sequelize.define('Booking',{
    profile_id: {
        type : Sequelize.UUID,
        allowNull : false
    },
    customer_id :{
        type : Sequelize.UUID,
        allowNull : false
    },
    slot_assigned: {
        type : Sequelize.INTEGER,
        allowNull : false
        },
    status : {
        type : Sequelize.ENUM,
        values: ['Active', 'Completed'],
        defaultValue : 'Active'
    }
}, { timestamps: false });


module.exports = Booking;