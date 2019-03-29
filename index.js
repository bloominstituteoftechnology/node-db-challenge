const express = require('express');
const helmet = require('helmet');
const knexConfig = require('./knexfile');
const knex = require('knex');

const server = express(); //server

const db = knex(knexConfig.development); //db

server.use(helmet(), express.json()); //midware
