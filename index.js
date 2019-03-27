// initialize server and routes
const express = require('express');
const server = express();
const actions = require('./data/routers/actions');
const projects = require('./data/routers/projects');


// server variables and middleware
const port = process.env.PORT || 5000; 
const parser = express.json();

const helmet = require('helmet');
const logger = require('morgan');

// apply middlewares
server.use(
    parser,
    logger('tiny'),
    helmet(), 
    );

// define routes and launch server
server.use('/api/actions', actions);
server.use('/api/projects', projects);

server.listen(port, () => {
    console.log(`Server Started on port ${port}`); 
});