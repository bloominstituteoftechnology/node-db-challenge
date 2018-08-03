const express = require('express');
const apiRoutes = require('./api/apiRoutes');
const errorHandleer = require('./api/middleware/errors');

const server = express();

server.use(express.json());
server.use('/api', apiRoutes);
server.use(errorHandleer);

server.listen(8000, () => console.log('API is running on port 8000...'));