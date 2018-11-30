const express = require('express');
const server = express();
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex (knexConfig.development);
server.use(express.json());
server.get('/', (req, res) =>{
    res.json({api: 'up'});
});

server.listen(9000, () => console.log("It's ALIVE!!!"));

