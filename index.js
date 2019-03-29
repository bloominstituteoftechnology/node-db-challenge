const express = require('express');
const helmet = require('helmet');
const knexConfig = require('./knexfile');
const knex = require('knex');

const server = express(); //server

const db = knex(knexConfig.development); //db

server.use(helmet(), express.json()); //midware

server.post('/api/projects', (request, response) => {
    let { name, description, complete } = request.body; // decon
    if ( !name || name.length < 4 ) {
        return response.status(400).json({ errorMessage: "Project name must be at least 4 characters." })
    }
    if ( !description ) {
        description = "";
    }
    if ( !complete ) {
        complete = false;
    }


const port = 4000;
 server.listen(port, () => console.log(`server rolling on port ${port}`));
