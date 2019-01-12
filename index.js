const express = require('express');
const server = express();

const knex = require('knex');
const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);
const PORT = process.env.PORT || 3400;

server.use(express.json());

//GET

//get project
//get project by id that also returns array of actions
//post project
//post action

//SERVER

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});