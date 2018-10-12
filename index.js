const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const projectDb = require('./data/helpers/projectDb');
// const actionRoutes = require('./data/helpers/actionRoutes');

const server = express();
const port = 8500;

server.use(cors());
server.use(helmet());
server.use(express.json());

server.post('/projects', (req, res) => {
    const project = req.body;
    projectDb.insert(project)
        .then(projectId => {
            console.log(projectId);
            res.status(201).json(projectId);
        })
        .catch(() => res.status(500).json({error: 'Error adding project'}));
})

server.listen(port, () => console.log(`\nAPI running on http://localhost:${port}\n`));