const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

//imports Routes
const projectRoute = require('../routes/projectRoute');
const actionRoute = require('../routes/actionRoute');

const server = express();
server.use(express.json());

//Route roots
server.use('/api/projects', projectRoute);
server.use('/api/actions', actionRoute);