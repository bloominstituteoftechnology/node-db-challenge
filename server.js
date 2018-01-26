const express = require('express');
const bodyParser = require('body-parser');

const postsEndpoints = require('./projects/projectsEndpoints.js');
const actionsEndpoints = require('./actions/actionsEndpoints.js');
const usersEndpoints = require('./contexts/contextsEndpoints.js');

const server = express();

server.use(bodyParser.json());

server.use('/api/projects', postsEndpoints);
server.use('/api/actions', actionsEndpoints);
server.use('/api/contexts', usersEndpoints);

server.listen(3000, () => console.log('running on port 3000'));