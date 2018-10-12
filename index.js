const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./routes/projectRotuer');

const server = express();

server.use(express.json(), helmet());
server.use('/api/projects', projectRouter);

server.listen(9000, console.log(`API Running on port ${9000}`));