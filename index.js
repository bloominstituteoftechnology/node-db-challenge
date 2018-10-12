const express = require('express');
const applyGlobalMiddleware = require('./config/middleware/global.js');

// routes
const { projectRoutes, actionRoutes } = require('./routes/index.js');

const server = express();
const port = 5000;

// middleware
applyGlobalMiddleware(server);

// endpoints
server.use('/projects/', projectRoutes);
server.use('/actions/', actionRoutes);

server.listen(port, () => { console.log(`\n=== Listening on port ${ port } ===`) });
