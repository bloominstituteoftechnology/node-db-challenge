const express = require('express');
const helmet = require('helmet');

const routes = require('./Routes/routes.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send("It's Alive");
});

server.use('/api/projects', routes);
// server.use('/api/students', routes);

server.listen(9000, () => console.log('\nAPI running on 9k\n'));