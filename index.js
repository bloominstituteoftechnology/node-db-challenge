const express = require("express");
const knex = require("knex");
const port = 8000;

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());













server.listen(port, () => console.log(`\n== Port ${port} ==\n`));