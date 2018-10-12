const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
// const actionRoutes  = require('./actions/actionRoutes')
// const projectRoutes = require('./projects/projectRoutes')


const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// server.use('/actions' , actionRoutes);
// server.use('/projects', projectRoutes);

server.get('/', (req,res) => {
  res.send('This thing working???')
});

const port = 9001;
server.listen(port, function() {
  console.log(`\n=== ${port} Power level over 9000!! ===\n`);
});