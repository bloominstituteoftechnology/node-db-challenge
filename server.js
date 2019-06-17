const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const ProjectsRouter = require('./projects/projects-router.js');
const ActionsRouter = require('./actions/actions-router.js');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', ProjectsRouter);
server.use('/api/actions', ActionsRouter);

server.get('/', (req, res) => {
    res.send(`
    <h2>Webpt4 db challenge</h2
    `)
});


  
module.exports = server;
