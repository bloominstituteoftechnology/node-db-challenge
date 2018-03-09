const express = require('express');
const bodyParser = require('body-parser');

const projEndpoints = require('./projects/projEndpoints.js');

const server = express();

server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.json({ api: 'sprinting...' });
});

server.use('/api/projects', projEndpoints);

server.listen(5000, () => console.log('running on port 5000'));