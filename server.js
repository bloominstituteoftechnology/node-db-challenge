const express = require('express');
const bodyParser = require('body-parser');

const projectsEndpoints = require('./projects/projectsendpoints.js');
const actionsEndpoints = require('./actions/actionsendpoints.js');
const contextsEndpoints = require('./contexts/contextsendpoints.js');

const server = express();

server.use(bodyParser.json());

server.use('/api/projects', projectsEndpoints);
server.use('/api/actions', actionsEndpoints);
server.use('/api/contexts', contextsEndpoints);

server.listen(3000, () => console.log('Server listening on port 3000'));