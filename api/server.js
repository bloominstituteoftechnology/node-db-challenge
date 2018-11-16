const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');


//imports Routes
const projectRoute = require('../routes/projectRoute');
const actionRoute = require('../routes/actionRoute');

const server = express();
server.use(express.json());

server.get('/', (req,res) => {
  res.send('up and running')
})

//Route roots
server.use('/api/projects', projectRoute);
server.use('/api/actions', actionRoute);

module.exports = server;