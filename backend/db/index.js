const { Sequelize } = require('sequelize');

let { DATABASE_NAME, 
      USER_NAME, 
      PASSWORD, HOST_NAME, DIALECT } = process.env;


 let sequelize = new Sequelize(
        DATABASE_NAME, 
        USER_NAME, 
        PASSWORD,{
            host : HOST_NAME,
            dialect : DIALECT
        } );
    

module.exports = sequelize;
