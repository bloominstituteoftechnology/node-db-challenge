const express = require('express');
const helmet = require('helmet');
const port = 7007;

const routes = require('./projects/routes.js');
const server = express();

server.use(express.json(), helmet());
server.use('/', routes)

server.listen(port, () => console.log(`===API running ${port} port===\n`))