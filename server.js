const express = require('express');
const server = express();
server.use(express.json());
const PORT = 3000;

const errors = require('./middleware/errors');

const projectsRoutes = require('./router/projectsRouter');
const actionsRoutes = require('./router/actionsRouter');

// base endpoints here
server.get('/', (req, res) => {
  res.send('working...');
});

// API routes
server.use('/api/projects', projectsRoutes);
server.use('/api/actions', actionsRoutes);

// error handling
server.use(errors);

// not found - 404
server.use((req, res) => {
  res.status(404).send(`<h1>404: resource "${req.url}" not found</h1>`);
});

server.listen(
  PORT,
  console.log(`\n=== Web API Listening on http://localhost:${PORT} ===\n`),
);
