//dependecies
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const server = express();

//setting up knex
const knex = require('knex');
const knexConfig = require('./knexfile');

//calling server
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));


//endpoints

//port
const port = 7000
server.listen(port, function () {
    console.log('Loud and Clear')
})