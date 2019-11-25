const express = require('express');
const server = express();

const helmet = require('helmet');

const ProjectsRouter = require('./routes/projects')

server.use(helmet());
server.use(express.json());

server.use('/api/projects', ProjectsRouter)


server.get('/', (req, res) => {
    res.send('Node-DB-Challenge')
  })

module.exports = server;
