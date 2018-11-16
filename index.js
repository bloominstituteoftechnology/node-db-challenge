const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile.js");
const db = knex(knexConfig.development);
const server = express();

server.use(express.json());

server.listen(4000, () => console.log("\n=== Server running on port 5000 ===\n"));
