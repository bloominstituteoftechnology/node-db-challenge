const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

const knex = require('./database/db');
const db = require('./database/db')
const server = express();

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'Running Man'});
});

server.listen(PORT, function() {
    console.log(`Server is Rocking on ${PORT}`)
});