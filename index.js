const express = require('express');
const server = express();

const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const PORT = proccess.env.PORT || 3300;

server.use(express.json());

server.post