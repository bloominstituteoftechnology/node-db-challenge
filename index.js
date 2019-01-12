const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile');

const server = express();
const db = (dbConfig.development);
const PORT = 0112

server.use(express.json());

server.post('/project', (req, res) => {

});

server.post('/action', (req, res) => {

});

server.get('/porject/:id', (req, res) => {

});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});