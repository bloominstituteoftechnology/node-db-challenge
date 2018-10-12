const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const projectRoutes = require('./data/helpers/projectRoutes');
const actionRoutes = require('./data/helpers/actionRoutes');

const server = express();
const port = 8500;

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);

server.listen(port, () => console.log(`\nAPI running on http://localhost:${port}\n`));