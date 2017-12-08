const express = require('express');
const bodyParser = require('body-parser');

const sqlite = require('sqlite3');
const knex = require('knex');

const server = express();

const port = 7575;
server.listen(port, function() {
  console.log(`Server Listening on ${port}`);
});
