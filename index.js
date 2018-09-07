const express = require('express'); 
const knex = require('knex'); 
const dbConfig = require('./knexfile'); 

const db = knex(dbConfig.development); 

const server = express(); 

server.listen(6500, () => {console.log("Starting port at PORT 6500")}); 

