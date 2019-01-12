const express = require('express');
const server = express();
const db = require('./dbConfig');

server.use(express.json());

const PORT = 4040;

server.listen(PORT, () =>
  console.log(`Server is up and running in port: ${PORT}`)
);
