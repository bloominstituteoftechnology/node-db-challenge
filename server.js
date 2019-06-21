const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
// const knexConfig = require('knexfile.js');
// const projectModel = require('./data/helpers/projectModel');
// const actionModel = require('./data/helpers/actiontModel');



// const db = knex(knexConfig.development);
const server = express();

server.use(helmet());
server.use(express.json());

//test 
server.get('/', (req, res) => {
    res.send('Hello World!!');
})

server.post('/projects', (req, res) => {
    const projectInfo = req.body;
    projecModel.insert(projectInfo)
})

module.exports = server;