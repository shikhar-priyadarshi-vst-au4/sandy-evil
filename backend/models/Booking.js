const sequelize = require('../db/index');
const Sequelize = require('sequelize');

const Booking = sequelize.define('Booking',{
  id : {
      type : Sequelize.UUID,
      defaultValue : Sequelize.UUIDV1,
      primaryKey : true
  },
  customer_id : {
    type : Sequelize.UUID,
    allowNull : false
  },
  worker_id : {
      type : Sequelize.UUID,
      allowNull : false
  },
  services : {
      type : Sequelize.ARRAY(Sequelize.JSON),
      allowNull : false
  },
  status : {
      type : Sequelize.ENUM(['Accept, Decline, Pending']),
      allowNull : false
  },
  balance : {
      type : Sequelize.FLOAT,
      allowNull : false
  }
})

module.exports = Booking;