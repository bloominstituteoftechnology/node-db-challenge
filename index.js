const express = require("express");
const helmet = require("helmet");

const projectsRoutes = require("./projects/projectsRoutes.js");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/projects", projectsRoutes);

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
