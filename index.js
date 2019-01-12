const express = require('express');
const helmet = require('helmet');
const projectsRouter = require('./projectsRoutes');
const actionsRouter = require('./actionsRoutes');

const server = express();

server.use(express.json());
server.use(helmet());

//endpoints
server.get('/', (red, res) => {
  res.send('Sanity check endpoint');
});

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

//Setting up listener
const PORT = 5432;
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}.`);
});
