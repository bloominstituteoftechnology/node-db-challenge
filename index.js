const express = require('express');
const helmet = require('helmet');

const projects = require('./projects/projectsModel.js');

const server = express();

server.use(helmet());
server.use(express.json());

//sanity check

server.get('/', (req, res) => {
    res.send("It's allliiiiiiiiiiive!!!!");
});

server.post('/api/projects', (req, res) => {
    const project = req.body;

    projects
        .addProject(project)
        .then(ids => {
            res.status(201).json(ids[0]);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

const port = 9999;
server.listen(port, () => console.log(`***API is running on ${port}`));