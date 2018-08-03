const express = require('express');
const server = express();

const projectRoute = require('./routers/projectsRouter')
const actionRoute = require('./routers/actionsRouter')

server.use(express.json());

server.use('/projects', projectRoute);
server.use('/actions', actionRoute);

server.listen(8000, () => {
    console.log('====API====')
})