const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const passport = require('passport');
const path = require('path');
const db = require('./db/index');
const router =  require('./routes/index');
const app = express();

require('./config/Passport');
require('./config/JWTAuth');

 
app.set('port', process.env.PORT) 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(passport.initialize());

app.use(router);
db.authenticate( ).then(( ) => {
        console.log("database connected")
        db.sync().then(( ) => {
            console.log('database is synchronised');
            app.listen(app.get('port'), server => {
                console.info(`Server listen on port ${app.get('port')}`);
                })
        })
        
    }).catch((error) => {
        console.log("database connection failed",error);
    })

