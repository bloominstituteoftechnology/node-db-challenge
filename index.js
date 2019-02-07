const express = require('express');
const server = express();

const knex = require('knex');
const dbConfig = require('./knexfile.js');

const db = knex(dbConfig.development);
const PORT = process.env.PORT || 3500;

server.use(express.json());

// GET

// get project

// get project by id

// post project

// post action


// Server Listening
server.listen(PORT, () => {
	console.log(`Server Listening on: ${PORT}`)
});