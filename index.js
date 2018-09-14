const express = require('express');
const server = express();
const knex = require('knex');
const dbConfig = require("./knexfile");

const db = knex(dbConfig.development);

server.use(express.json());



server.get('/', (req, res) => {
    res.send('Hello World');
});

server.get('/api/projects', (req, res) => {
    db("projects")
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => res.status(500).json(err));
});



server.listen(8000, () => console.log("======API running on 8000======"));