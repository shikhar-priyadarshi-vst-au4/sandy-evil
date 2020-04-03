const express = require('express');
const dotenv = require('dotenv').config();
const db = require('./db/index');

const app = express();
 
app.set('port', process.env.PORT || 3000) 

db.authenticate( ).then(( ) => {
        console.log("database connected")
        app.listen(app.get('port'), server => {
        console.info(`Server listen on port ${app.get('port')}`);
        })
    }).catch(( ) => {
        console.log("database connection failed");
    })


