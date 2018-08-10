const express = require('express');
const db = require('./data/db');
const server = express();

server.use(express.json());

// ==== PROJECT REQUESTS ====

server.get('/projects', (req, res) => {
    db('projects')
        .then(projs => {
            res.status(200).json(projs)
        })
        .catch(() => res.status(500).json(err))
})


server.listen(8000, () => console.log('\n==== API is running... ====\n'));