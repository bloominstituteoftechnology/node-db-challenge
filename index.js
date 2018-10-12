const express = require('express');
const helmet = require('helmet');

// routes
const projectRouter = require('./routes/projectRotuer');
const actionRouter = require('./routes/actionRouter');

//init server
const server = express();

// middleware
server.use(express.json(), helmet());
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

// port listener
server.listen(9000, console.log(`API Running on port ${9000}`));