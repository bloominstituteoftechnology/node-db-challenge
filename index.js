const express = require('express');
const helmet = require('helmet');
const server = express();
server.use(helmet());
server.use(express.json());

// server config
const port = 7100; // port for server to run from
const serverName = `Sprint-Challenge-RDBMS`; // Name of server to display at "/" endpoint 

// endpoint routing
const projectRoutes = require('./routes/projectRoutes');
const actionRoutes = require('./routes/actionRoutes');
server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

// server endpoints

server.get('/', (req, res) => { // sanity check
  res.send(`${serverName} running on port ${port}`);
});

server.listen({ port }, () => console.log(`## ${serverName} running on port ${port} ##`));