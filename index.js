const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan')
const server = express();
const cors = require('cors')
const actionsRouter = require('./Router/actions_router');
const projectsRouter = require('./Router/projects_router');

const PORT = 5050;
server.use(cors('localhost:5050'))
server.use(
            helmet(),
            morgan('dev'),
          );
server.use('/api/projects',projectsRouter);
server.use('/api/actions', actionsRouter);

//listen
server.listen(PORT, () =>{
  console.log(`\n=== Web API Listening on http://localhost:${PORT} ===\n`);
})