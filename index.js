console.log("YOOOOOOO, this index.js is WORKIINNNGG!");

const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(logger('combined'));
server.use(helmet());
server.use(cors());

//routes
const projectRoutes = require('./routes/projectRoutes.js');
const actionRoutes = require('./routes/actionRoutes.js');

server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

//Server test message
server.get('/', (req, res) => {
    res.send('It issssss Alivvvvve!!');
});

//Port
const port = 9000;
server.listen(port, () => console.log(`API is running on port ${port}`));