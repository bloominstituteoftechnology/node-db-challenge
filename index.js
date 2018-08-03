const express = require('express');
const server = express();
const dbConfig = require('./data/dbConfig');

const projectRoutes = require('./projects/projectRoutes');
const actionRoutes = require('./actions/actionRoutes');

const PORT = 8000;

server.use(express.json());

server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);




server.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
