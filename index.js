const express = require('express');

const helper = require('./helpers');

const server = express();

const PORT = 4000;

server.use(express.json());

server.post('/api/projects', (req, res) => {
    const project = req.body;
    if (project.project_name) {
        helper.addProject(project)
        .then((whatDataIsThis) => {
            res.status(201).json(whatDataIsThis);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
    }
})

server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})