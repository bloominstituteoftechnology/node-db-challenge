const express = require('express');

const bodyParser = require('body-parser');

const sqlite = require('sqlite3');
const knex = require('./db.js');

const server = express();

server.use(bodyParser.json());

// project routes