const express = require('express');

const projects = require('./data/helper/projectHelper');
const actions = require('./data/helper/actionHelper');

const server = express();
server.use(express.json());

server.use((req, res, next) => res.send('Unknown error please contact your system administrator'));

const port = 8000;
server.listen(port, ()=> console.log(`server running on port: ${port}`));