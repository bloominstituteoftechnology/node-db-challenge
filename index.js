const express = require('express');
const helmet = require('helmet');
const port = 9000;

const projectRoutes = require('./projects/projectRoutes');
const actionRoutes = require('./actions/actionRoutes');

const server = express();

server.use(helmet(), express.json());

server.get('/', (req, res) => {
  res.json('hi');
});

server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

server.listen(port, () => console.log(`\n--- Server running on port ${port} ---\n`));