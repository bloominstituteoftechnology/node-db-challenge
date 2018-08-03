const express = require('express');
const cors = require('cors');
const projects = require('./data/helpers/projectHelpers.js');
const actions = require('./data/helpers/actionHelpers.js');

const port = 5555;
const server = express();
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('Hello!')
  })



server.listen(port, () => console.log('API running...'))