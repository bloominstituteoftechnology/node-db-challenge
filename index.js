const express = require('express');
const helmet = require('helmet');

const projectsRoutes = require('./projects/projectsRoutes.js');
const actionsRoutes = require('./actions/actionsRoutes.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send("API is running");
});

server.use('/api/projects', projectsRoutes);
server.use('/api/actions', actionsRoutes);

const port = 9000;

server.listen(port, () => {
    console.log(`\nAPI running on port ${port}\n`)
});