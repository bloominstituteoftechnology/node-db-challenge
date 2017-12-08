const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./db.js');
const config = require('./knexfile.js');

const actionsEndpoints = require('./endpoints/actions/actionsEndpoints.js');
const contextEndpoints = require('./endpoints/context/contextEndpoints.js');
const projectsEndpoints = require('./endpoints/projects/projectsEndpoints.js');

const server = express();

server.use(bodyParser.json());

server.use('/api/actions', actionsEndpoints);
server.use('/api/context', contextEndpoints);
server.use('/api/projects', projectsEndpoints);


const port = 3000;
server.listen(port, () => console.log(`server running on port ${port}`));
