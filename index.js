const express = require('express');
const helmet = require('helmet');

const p_routes = require('./Routes/projectRoutes.js');
const a_routes = require('./Routes/actionRoutes.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send("It's Alive");
});

server.use('/api/projects', p_routes);
server.use('/api/actions', a_routes);

server.listen(9000, () => console.log('\nAPI running on 9k\n'));