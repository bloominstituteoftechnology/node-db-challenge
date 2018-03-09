const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const projectsRoute = require('./projects/projectsRoute');

const server = express();


server.use(bodyParser.json);

server.get('/', (req, res) => {
    res.status(200).json({ Server: 'Launch sequence started.' });
});

server.use('/projects', projectsRoute);

const port = 3000;
server.listen(port, () => {
    console.log(`Beginning launch sequence on server access ${port} in....`);
});
