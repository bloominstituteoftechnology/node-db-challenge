
const express = require('express');
const knex = require('knex');
const helmet = require('helmet');

const server = express();
const projectRoute = require('./routes/project');
const actionRoute = require('./routes/action');

server.use(express.json());
server.use(helmet());

server.use('/api/project', projectRoute);
server.use('/api/action', actionRoute);

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});