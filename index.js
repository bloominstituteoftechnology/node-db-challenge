const express = require('express');
const knex = require('knex');
const server = express();
server.use(express.json());


const dbConfig = require('./knexfile.js');
const db = knex(dbConfig.development);



server.get('/', (req, res) => {
res.send('Sprint API Running :D');
});

























const port = 1337;
server.listen(port, function() {
console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
