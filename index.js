const express = require("express");
const morgan = require('morgan');
const helmet = require('helmet');

const projectRoutes = require('./routes/projectRoutes.js');
const actionRouters = require('./routes/actionRoutes');

const server = express();

//Middleware
server.use(express.json());
server.use(morgan('dev'));
server.use(helmet());

// Endpoints
server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRouters)







const port = 8000;

server.listen(port, () => console.log(`\n== Port ${port} ==\n`));