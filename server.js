const express = require('express');

const projectRoutes = require('./routes/projectRoutes');
const actionRoutes = require('./routes/actionRoutes');

const middleware = require('./middleware');

const server = express();

middleware(server) 

server.use('/project', projectRoutes);

server.use('/actions', actionRoutes); 

module.exports = server;