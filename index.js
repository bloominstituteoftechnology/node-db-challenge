
const express = require('express');
const projectRoutes = require('./routes/projectRoutes.js');
const actionRouters = require('./routes/actionRoutes');
const middleware = require('./middleware/middlewareConfig');

const server = express();

//Middleware
middleware(server);

// Endpoints
server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRouters)







const port = 8000;

server.listen(port, () => console.log(`\n== Port ${port} ==\n`));