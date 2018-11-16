const express = require("express");
const server = express();
const knex = require("knex");
const knexConfig = require("./knexfile");

const db = knex(knexConfig.development);

server.use(express.json());

const port = 9000;
server.listen(port, () => console.log(`API running on port ${port}`));
