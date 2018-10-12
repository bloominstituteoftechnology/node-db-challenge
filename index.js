const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile");

const server = express();
const db = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());

//Endpoints go here

///////////////////

// server listener
server.listen(5000, () => console.log(`Server listening to port 5000`));