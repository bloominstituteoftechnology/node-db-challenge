const express = require('express');
const bodyParser = require('body-parser');

const actionEndpoints = require('./actions/actionEndpoints.js');
const contextEndpoints = require('./context/contextEndpoints.js');
const projectEndpoints = require('./projects/projectEndpoints.js');

const server = express();

server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Server running' });
});

server.use('/api/actions', actionEndpoints);
server.use('/api/context', contextEndpoints);
server.use('/api/projects', projectEndpoints);

const port = 5000;
server.listen(port, function() {
  console.log(`Server Listening on ${port}`);
});
