const { Sequelize } = require('sequelize');

let { DATABASE_NAME, 
      USER, 
      PASSWORD } = process.env;

let sequelize = new Sequelize(
    DATABASE_NAME, 
    USER, 
    PASSWORD,{
        host : 'localhost',
        dialect : 'postgres'
    } );

sequelize.sync(); 

module.exports = sequelize;
