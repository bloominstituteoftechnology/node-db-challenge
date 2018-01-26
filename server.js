const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./db.js');
const sqlite = require('sqlite3');

const server = express();

server.use(body.Parser.json());


