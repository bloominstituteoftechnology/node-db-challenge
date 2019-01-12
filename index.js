const express = require('express');
const projectRoute = require('./Routes/projectRoute');
const actionRoute = require('./Routes/actionRoute');
const server = express();
const logger = require('morgan');
const helmet = require('helmet');
const PORT = 4000;
server.use(express.json());
server.use(helmet());
server.use(logger('dev'))
server.disable("etag");

server.use('/api/projects', projectRoute);
server.use('/api/actions', actionRoute);
server.listen(PORT, err => {
    if (err) console.log(err);
    console.log(`server is listening on port ${PORT}`);
});