const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./routers/projectRouter.js');
//const actionsRouter = require('./routers/actionsRouter.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/projects', projectsRouter);
//server.use('/api/actions', actionsRouter);


server.get('/', (req, res) => {
  res.json({ api: 'running' });
});

const port = 8000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});