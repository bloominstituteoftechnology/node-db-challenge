// DEPENDENCIES
const express = require('express');
const helmet = require('helmet');
const handle = require('./handler.js');
// ROUTES

// SERVER
const server = express();

// MIDDLEWARE
server.use(express.json());
server.use(helmet());

// ENDPOINTS
server.use('/api/projects', handle);

// PORT
const port = 3400;
server.listen(port, () => console.log(` ==== LISTENING ON PORT ${port} ====`));