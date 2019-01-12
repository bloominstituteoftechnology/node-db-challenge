const express = require('express');
const server = express();

const morgan = require('morgan');

const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const PORT = 5750

server.use(
     express.json(),
     morgan.dev
    );


    
server.listen(PORT, ()=>{
    console.log(`Server is listenig on port:${PORT}`)
})



