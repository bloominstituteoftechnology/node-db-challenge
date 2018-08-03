const express = require('express');
const server = express();

const ProjectRoutes = require('./api/projects');
const ActionRoutes = require('./api/actions');
const ContextRoutes = require('./api/contexts');

server.use(express.json());
server.use('/api/projects', ProjectRoutes);
server.use('/api/actions', ActionRoutes);
server.use('/api/contexts', ContextRoutes);

const port = 8000;
server.listen(port, () => console.log('API running'));