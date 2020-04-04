const sequelize = require('../db/index');
const { Sequelize } = require('sequelize');

const Transaction = sequelize.define('Transaction',{
    assignment_id : {
        type : Sequelize.UUID,
        allowNull : false
    },
    total_amt : {
        type : Sequelize.DOUBLE,
        allowNull : false
    }
}, { timestamps: false });


module.exports = Transaction;