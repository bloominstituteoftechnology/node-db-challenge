const express = require('express');
const server = express();
const projectRouter = require('./routes/projRoute');
const actionRouter = require('./routes/actRoute');

const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const PORT = process.env.PORT || 5000;

server.use(express.json());


//SERVER

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});