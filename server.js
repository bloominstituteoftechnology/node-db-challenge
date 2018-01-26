const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./database/dbConfig.js');
const port = 5000;

const server = express();

server.use(bodyParser.json());

server.get('/', (req, res) => {  // API TEST ENDPOINT REMOVE FOR PRODUCTION
    res.json(knex.environment);
});


server.listen(port, () => {
    console.log(`server is now running on port: ${port}`);
});