const { Sequelize } = require('sequelize');

let { DEV_DATABASE_NAME, 
      DEV_USER_NAME, 
      DEV_PASSWORD, DEV_HOST_NAME, DEV_DIALECT } = process.env;


 let sequelize = new Sequelize(
        DEV_DATABASE_NAME, 
        DEV_USER_NAME, 
        DEV_PASSWORD,{
            host : DEV_HOST_NAME,
            dialect : DEV_DIALECT
        } );
    

module.exports = sequelize;
