const express = require("express");
const knex = require("knex");

const knexConfig = require("./knexfile.js");

const server = express();
const db = knex(knexConfig.development);
server.use(express.json());

server.listen(9000, () => console.log("running on port 9000"));
