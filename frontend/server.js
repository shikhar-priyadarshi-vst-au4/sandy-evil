const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// app.set('port', process.env.port) 
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
})
app.listen(PORT, server =>{
    console.info(`Server listen on port ${PORT}`);
})