const express = require('express');
const bodyParser = require('body-parser');

const projectsEndpoints = require('./posts/projectsEndpoints.js');
const actionsEndpoints = require('./tags/actionsEndpoints.js');
const contextEndpoints = require('./users/contextEndpoints.js');

const server = express();

server.use(bodyParser.json());

server.use('/api/posts', projectsEndpoints);
server.use('/api/tags', actionsEndpoints);
server.use('/api/users', contextEndpoints);

server.listen(3000, () => console.log('running on port 3000'));
