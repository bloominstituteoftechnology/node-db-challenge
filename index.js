const express = require("express");
const knex = require("knex");

const dbConfig = require("./knexfile.js");
const server = express();

const db = knex(dbConfig.development);
const PORT = 6000;

server.listen(PORT, () => {
    `server is up and running on ${PORT}`
})