const express = require("express");
const configMiddleware = require("./config/middleware");
const helper = require("./data/helper");

// Create server
const server = express();
const PORT = 3000;

// Middleware
configMiddleware(server);

// Start server
let date = Date();

server.get("/", (req, res) => {
  res.send(" ✅ Getting Things Done™️ ✅ ");
});

// Project endpoints
server.get("/api/projects", (req, res) => {
  helper
    .getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post("/api/projects", (req, res) => {
  const newProject = req.body;

  helper
    .addProject(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(newProject);
      res.status(500).json({ message: "Could not add new project." });
    });
});

// Action endpoints
server.get("/api/actions", (req, res) => {
  helper
    .getActions()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post("/api/actions", (req, res) => {
  const newAction = req.body;

  helper
    .addAction(newAction)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add new action." });
    });
});

server.listen(PORT, () => {
  console.log(`\n===== API Listening on http://localhost:${PORT} =====\n`);
  console.log(`===== Updated on ${date} =====\n`);
});
