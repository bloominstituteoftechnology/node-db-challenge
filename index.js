const express = require('express');
const knex = require('knex');
const cors = require('cors');

const projects = require('./data/helpers/projectHelpers.js');
const actions = require('./data/helpers/actionHelpers.js');

const port = 5555;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('Up and running...')
  })

server.listen(port, () => console.log('API running...'))