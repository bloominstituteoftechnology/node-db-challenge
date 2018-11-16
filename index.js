// NODE MODULES
// ==============================================
const express = require('express');
const helmet = require('helmet');

// FILE IMPORTS, CONSTANTS
// ==============================================
const projectRouter = require('./routes/projectRoutes.js');
const actionRouter = require('./routes/actionRoutes.js');
const port = 5000;

const server = express();

// MIDDLEWARE
// ==============================================
server.use(express.json());
server.use(helmet());

// ROUTES
// ==============================================
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

// START THE SERVER
// ==============================================
server.listen(port, () => console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`));
