//dependecies
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');



//calling server
const server = express();
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

//routes
const projectRoute = require('./routes/projectRoute');
const actionRoute = require('./routes/actionRoute');

server.use('/projects', projectRoute);
server.use('/actions', actionRoute);

//port
const port = 7000
server.listen(port, function () {
    console.log('Loud and Clear')
})