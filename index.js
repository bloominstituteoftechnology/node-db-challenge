const express = require('express');
const helmet = require('helmet');
const ActionsRoutes = require('./api/Actions/actionsroutes');
const ProjectsRoutes = require('./api/Projects/projectsroutes');

// server init
const server = express();
server.use(express.json());
server.use(helmet());

// routes
server.use('/api/actions', ActionsRoutes);
server.use('/api/projects', ProjectsRoutes);

server.use((req, res) => {
  res.status(404).json({"error": `The requested path '${req.url}' doesn't exist.`});
});

// listener
const port = 8080;
server.listen(port, () => console.log(`\n~~~ Server listening on port ${port} ~~~\n`));
