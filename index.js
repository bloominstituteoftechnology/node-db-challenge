const express = require('express');
const knex = require('knex');
const server = express();

// PORT
const PORT = 2300;
//Knex
const dbConfig = require('./knexfile.js');
const db = knex(dbConfig.development);

//Middleware
server.use(express.json());

server.get('/', (req,res) => {
    res.json({Message: `Server is up and running now at ${PORT}`});
});


server.listen(PORT, () => {
   console.log(`Server is up and running at localhost://${PORT}`);
})



