const express = require('express');
const dotenv = require('dotenv').config();
const db = require('./db/index');

const app = express();
 
app.set('port', process.env.PORT || 5000) 

db.authenticate( ).then(( ) => {
        console.log("database connected")
        db.sync().then(( ) => {
            console.log('database is synchronised');
            app.listen(app.get('port'), server => {
                console.info(`Server listen on port ${app.get('port')}`);
                })
        })
        
    }).catch(( ) => {
        console.log("database connection failed");
    })

