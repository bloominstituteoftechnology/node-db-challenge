const express = require('express');

const server = express();

server.use(express.json());

const R = require('./R.js');

server.use('/R', R);

server.get('/', (req, res) => {
    res.send(`
      <h2>Lambda Sprint II:)</h>
      <p>Let's get started... </p>
    `);
});

module.exports = server;
