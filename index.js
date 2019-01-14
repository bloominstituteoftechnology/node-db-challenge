const express = require('express');
const server = express();

const projectsRouter = require('./routers/projectsRouter');
const actionsRouter = require('./routers/actionsRouter');

server.use(express.json());
server.use('/projects', projectsRouter);
server.use('/actions', actionsRouter);

const PORT = 4040;

server.listen(PORT, () =>
  console.log(`Server is up and running in port: ${PORT}`)
);
