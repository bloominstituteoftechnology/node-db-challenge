const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const server = express();

//set up database access
const knexConfig = require("./knexfile.js");
const db = knex(knexConfig.development);

//apply middleware
server.use(express.json());
server.use(helmet());

//Listen on port
server.listen(9000, () => {
  console.log("API IS running");
});
