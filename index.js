const express = require('express');

const projectRoutes = require('./data/helpers/projectRoutes');
const actionRoutes = require('./data/helpers/actionRoutes');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRoutes)
server.use('/api/actions', actionRoutes)


const port = 3000;
server.listen(port, function() {
  console.log(`\n == My Awesome API Listening on http://localhost:${port} == \n`);
})
