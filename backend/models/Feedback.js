const sequelize = require('../db/index');
const { Sequelize } = require('sequelize');

const Feedback = sequelize.define('Feedback',{
    profile_id : {
        type : Sequelize.UUID,
        allowNull : false
    },
    feedback : {
        type : Sequelize.STRING,
        allowNull : false
    },
    rating : {
        type : Sequelize.INTEGER,
        allowNull : false
    }
}, { timestamps: false });


module.exports = Feedback;