const express = require('express');
const knex = require('knex');
const projectRoutes = require('./projects/projectRoutes')
const actionRoutes  = require('./actions/actionRoutes')


const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(express.json());

server.use('/projects', projectRoutes);
server.use('/actions' , actionRoutes);

server.get('/', (req,res) => {
    res.send('I am getting pizza after this')
});

const port = 2200;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
