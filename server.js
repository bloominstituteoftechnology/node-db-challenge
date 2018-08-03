const express = require('express');

const knexDb = require('./data/db');

const server = express();

const projectCrud = require('./crud/projectEndpoints');

const actionCrud = require('./crud/actionEndpoints');

server.use(express.json());

server.use(projectCrud);
server.use(actionCrud);