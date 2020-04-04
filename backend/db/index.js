const { Sequelize } = require('sequelize');

let { DATABASE_NAME, 
      USER, 
      PASSWORD, HOST, DIALECT } = process.env;


 let sequelize = new Sequelize(
        DATABASE_NAME, 
        USER, 
        PASSWORD,{
            host : HOST,
            dialect : DIALECT
        } );
    

module.exports = sequelize;
