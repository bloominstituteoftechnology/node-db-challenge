const express = require('express');
const helmet = require('helmet');
// const knex= require('knex');

// const knexConfig = require('./knexfile');
// const db = knex(knexConfig.development); 

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send("It's Alive!");
})

server.listen(9000, () => console.log('\n Party at part 9k '))