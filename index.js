const express = require("express");

// Routes
const ProjectRoutes = require("./Routes/ProjectRoutes.js");

// Middleware
const server = express();
server.use(express.json());

// Routing
server.use("/api/projects", ProjectRoutes);

server.listen(8000, () => {
  console.log(`\n=== Web API Listening on http://localhost:8000 === \n`);
});
