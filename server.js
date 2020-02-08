const express = require('express');

const dataRouter = require('./data/project-data/data-routes');
const server = express();

server.use(express.json());
server.use('/data', dataRouter);

server.get('/', (req, res) => {
    res.send('<h3>Toni sprint challenge</h3>');
  });


module.exports = server;