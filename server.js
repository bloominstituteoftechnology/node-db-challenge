const express = require('express');
const helmet = require('helmet');

/* insert routers here when completed like:
const SchemeRouter = require('./schemes/scheme-router.js');
*/

const server = express();

server.use(express.json());
server.use(helmet);
/* insert routers here when completed like:
server.use('/api/schemes', SchemeRouter);
*/

module.exports = server;