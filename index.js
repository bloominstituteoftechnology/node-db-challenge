// IMPORT DEPENDENCIES
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

// IMPORT KNEX CONFIGURATION
const knexConfig = {
client: 'sqlite3',
connection: {
    filename: './data/rolex.db3',
},
useNullAsDefault: true, // needed for sqlite
};

// DEFINE DATABASE
const dbConfig = require("./knexfile.js")
const db = knex(dbConfig.development);

// DEFINE SERVER
const server = express();

// APPLY MIDDLEWARE
server.use(helmet());
server.use(express.json());

// ROUTE HANDLER TEST
server.get('/', (req, res) => {
	res.send("It works!");
});

const port = process.env.PORT || 9090;
server.listen(port, () => console.log(`\nrunning on ${port}\n`));