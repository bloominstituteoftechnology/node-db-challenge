const express = require("express");
const helmet = require("helmet");
const knexConfig = require("./knexfile.js");
const knex = require("knex");
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

const port = 8000;
server.listen(port, function() {
  console.log(`\n=== API Listening on http://localhost:${port} ===\n`);
});
