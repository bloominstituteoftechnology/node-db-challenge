const express = require('express');
const bodyParser = require('body-parser');

const projectsEndpoints = require('../projects/projectsEndPoints.js');
const actionsEndpoints = require('../actions/actionsEndPoints.js');
const contextsEndpoints = require('../contexts/contextsEndPoints.js');

const server = express();

server.use(bodyParser.json());

server.use('/api/projects', projectsEndpoints);
server.use('/api/actions', actionsEndpoints);
server.use('/api/contexts', contextsEndpoints);

const port = 3000;
server.listen(port, () => console.log(`running on port ${port}`));
