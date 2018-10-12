const express = require('express');
const helmet = require('helmet');

const port = 3333;
const server = express();

server.use(express.json());
server.use(helmet());

//Testing Server
server.get('/', (req, res) => {
    res.send('Am I Alive?????'); //YES!
});

server.listen(port, () => {
    console.log(`\n=== Listening on Port ${port} ===\n`)
});