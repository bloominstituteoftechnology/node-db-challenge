const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./routers/project_router');
const actionRouter = require('./routers/action_router');
// add for context when get there

const server = express();

server.use(express.json());
server.use(helmet());
PORT = 1234;

// Test server
server.get('/', (req, res) => {
  res.json({ message: "Server up and running..." })
})

// Routes
server.use('/api/project', projectRouter);
server.use('/api/action', actionRouter);
// add context route when get there

// Keep last
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})