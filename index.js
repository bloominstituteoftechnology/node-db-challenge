const express = require('express');
const server = express();
const dbConfig = require('./data/dbConfig');

const projectRoutes = require('./projects/projectRoutes');
const actionRoutes = require('./actions/actionRoutes');
const contextRoutes = require('./contexts/contextRoutes');

const PORT = 8000;

server.use(express.json());

server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);
server.use('/contexts', contextRoutes);




server.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
