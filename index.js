const express = require('express');
const server = express();
const helmet= require('helmet');

server.use(express.json());
server.use(helmet());
const project = require('./router/projects.js')
const action = require('./router/actions.js')



server.use('/api/projects', project);
server.use('/api/actions', action);

const port = 3000;
server.listen(port, ()=>  {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});