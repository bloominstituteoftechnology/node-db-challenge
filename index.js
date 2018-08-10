const express = require('express');
const db = require('./data/db');

const server = express();
server.use(express.json());

const PORT = 5000;

server.get('/', (req, res) => {
    res.send('up and running...');
});

server.get('/projects', (req, res) => {
    db('projects')
    .then(project => {
        res.status(200).json(project)
    })
    .catch(() => {
        res.status(500).json({message: "error"})
    })
});

server.listen(PORT, () => {
    console.log('Server up and running on ${PORT}');
})