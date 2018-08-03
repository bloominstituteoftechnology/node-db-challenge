const express = require('express');
const server = express();

const projectRoute = require('./routers/projectsRouter')

server.use(express.json());

server.use('/projects', projectRoute)

server.listen(8000, () => {
    console.log('====API====')
})