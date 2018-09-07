const express = require('express');
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(require('cors')());
server.use('/api', require('./api'));

server.listen(8000, () => console.log('Server listening on port 8000.'));
