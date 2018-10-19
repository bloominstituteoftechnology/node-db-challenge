const express = require('express');
const helmet = require('helmet');
const knexConfig = require('./knexfile');
const knex = require('knex');

const server = express();

const db = knex(knexConfig.development);

server.use(helmet(), express.json());

/// ---- CREATE New Project ----
server.post('/api/projects', (request, response) => {
    // Deconstruct Request Body
