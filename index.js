const express = require('express');

const db = require('./data/db');

const server = express();
server.use(express.json())

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Up and running on ${PORT}`)
})
