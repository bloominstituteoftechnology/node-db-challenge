const express = require('express');
const bodyParser = require('body-parser');

const projectsEndpoints = require('./projects/projectsEndpoints.js');
const actionsEndpoints = require('./actions/actionsEndpoints.js');
const contextsEndpoints = require('./contexts/contextsEndpoints.js');

const server = express();

server.use(bodyParser.json());

server.use('/api/projects', projectsEndpoints);
server.use('/api/actions', actionsEndpoints);
server.use('/api/contexts', contextsEndpoints);

server.listen(3000, () => console.log('running on port 3000'));