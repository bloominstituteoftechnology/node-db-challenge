const express = require('express');
const helmet = require('helmet');
const dbProjects = require('./models/project_models');
const dbActions = require('./models/action_models');
const newRouter = require('./newRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/projects', newRouter);

// server instantiation

const port = 8000;

server.listen(port, () => console.log(`Server listening on port ${port}.`));
