// imports
const express = require("express");
// instantiate server
const server = express();
server.use(express.json());

// endpoints

// server port
server.listen(9000, () => {
  console.log("Server running on port 9000");
});

// knex
const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);
