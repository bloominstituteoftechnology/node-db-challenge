const express = require('express');
const bodyParser = require('body-parser');

const projEndpoints = require('./projects/projEndpoints.js');
const actionEndpoints = require('./actions/actionEndpoints.js');
const contextEndpoints = require('./contexts/contextEndpoints.js');

const server = express();

server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.json({ api: 'sprinting...' });
});

server.use('/api/projects', projEndpoints);
server.use('/api/actions', actionEndpoints);
server.use('/api/contexts', contextEndpoints);

server.listen(5000, () => console.log('running on port 5000'));