const express = require('express');
const bodyParser = require('body-parser');
const knex =require*"./database/db.js"

const server = express();
server.use(bodyParser.json());
server.get('/', (req, res) => {
  res.status(200).json('Up and running')
})