const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const projectsRoute = require('./routes/projectsRoute');
const actionsRoute = require('./routes/actionsRoute');
const contextRoute = require('./routes/contextRoute');

const server = express();


server.use(bodyParser.json);

server.get('/', (req, res) => {
    res.status(200).json({ Server: 'Launch sequence started.' });
});

server.use('/projects', projectsRoute);
server.use('/actions', actionsRoute);
server.use('/context',contextRoute);

const port = 3000;
server.listen(port, () => {
    console.log(`Beginning launch sequence on server access ${port} in....`);
});
