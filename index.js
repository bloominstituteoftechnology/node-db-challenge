const express = require('express');
const applyGlobalMiddleware = require('./config/middleware/global.js');

// routes
const { projectRoutes } = require('./routes/index.js');

const server = express();
const port = 5000;

// middleware
applyGlobalMiddleware(server);

// endpoints
server.use('/projects/', projectRoutes);

server.listen(port, () => { console.log(`\n=== Listening on port ${ port } ===`) });
