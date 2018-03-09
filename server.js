const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');

const server = express();
const port = 3000;

server.use(bodyParser.json);

server.get('/', (req, res) => {
    res.status(200).json({ Server: 'Launch sequence started.' });
});

server.listen(port, () => {
    console.log('Beginning launch in....');
});
