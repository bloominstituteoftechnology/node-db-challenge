const express = require('express');
const helmet = require('helmet');

const projectsRoutes = require('./projects/projectsRoutes');
const actionsRoutes = require('./actions/actionsRoutes');

const port = 8000;

const server = express();

// MIDDLEWARE
server.use(helmet());
server.use(express.json());

// ROUTES
server.use('/api/projects', projectsRoutes);
server.use('/api/actions', actionsRoutes);

server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));
