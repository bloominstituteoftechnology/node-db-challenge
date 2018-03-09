const express = require('express');
const bodyparser = require('body-parser');
const PORT = 3000;

const knex = require('./database/dbConfig');

const server = express();

server.use(bodyparser.json());


server.get('/', (req, res) => {
    res.status(200).json({ message: 'From its slumber, the server rises!' });
});



server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})