const express = require('express');
const helmet = require('helmet');

const projectsRoutes = require('./projects/projectsRoutes');
const actionsRoutes = require('./actions/actionsRoutes');

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here
server.get('/', (req, res) => {
  res.send('It is working!');
});


server.use('/api/projects', projectsRoutes);
server.use('/api/actions', actionsRoutes);

// listening port
const port = 5000;
server.listen(port, function() {
  console.log(`\n=== API listening on port ${port} ===\n`);
});