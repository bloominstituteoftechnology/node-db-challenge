const express = require('express');
const server = express();

const knex = require('knex');
const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);
const PORT = 9000;

server.use(express.json());


//POST for adding projects.

// POST for adding actions.

// GET for retrieving a project by its id that returns actions aswell

server.listen(PORT, () =>{
    console.log(`Server is listening on ${PORT}`)
})