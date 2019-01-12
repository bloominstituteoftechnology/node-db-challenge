const express = require('express');
const projectRoute = require('./Routes/dishRoute');
const actionRoute = require('./Routes/recipeRoute');
const server = express();
const logger = require('morgan');
const helmet = require('helmet');
const PORT = 4000;
server.use(express.json());
server.use(helmet());
server.use(logger('dev'))
server.disable("etag");

server.use('/api/dishes', projectRoute);
server.use('/api/recipes', actionRoute);
server.listen(PORT, err => {
    if (err) console.log(err);
    console.log(`server is listening on port ${PORT}`);
});