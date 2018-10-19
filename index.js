console.log("Greetings Earthling, your index.js is functioning!");

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

//server test message
server.get('/', (req, res) => {
    res.send('It\'s Alive!!');
});

//port setup
const port = 9000;
server.listen(port, () => console.log(`API is running like a tiger on port ${port}`));