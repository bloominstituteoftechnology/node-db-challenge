const db = require('./data/db.js');
const express = require('express');

const PORT = 4040;
const server = express();

server.use(express.json());

// add project

server.post('/api/projects', (req, res) => {
    const newProject = req.body;
    db.addProject(newProject)
        .then(idInfo => {
            res
                .status(201)
                .json(idInfo);
        })
        .catch(err => {
            res
                .status(500)
                .json({message: 'The project could not be added at this time.'});
        });
});

// initiate listening

server.listen(PORT, err => {
    console.log(`Server is running on ${PORT}`);
});