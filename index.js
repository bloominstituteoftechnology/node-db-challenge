const express = require('express');
const helmet = require('helmet');

const projectsRoute = require('./projects/projectsRoutes.js');

const server = express();

server.use(helmet());
server.use(express.json());

//sanity check

server.get('/', (req, res) => {
    res.send("It's allliiiiiiiiiiive!!!!");
});

server.use('/api/projects', projectsRoute);

const port = 9999;
server.listen(port, () => console.log(`***API is running on ${port}`));