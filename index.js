const express = require('express');

const projects = require('./projects.js');

const server = express();
server.use(express.json());

// add a new project
server.post("/projects", (req, res) => {
    const { name, description, completed } = req.body;
    const project = { name, description, completed };
    if (!project) {
      return res.status(400).send({
        errorMessage: "Please provide a name for the project."
      });
    }
    projects
      .addProject(project)
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(error => {
        res.status(500).json({ error: "Can not post the project. project may already exist." });
      });
  });

server.get('/projects', (req, res) => {
    projects
      .getProjects()
      .then(project => res.status(200).json(project))
      .catch(err => res.status(500).json(err));
});

server.get("/projects/:id", (req, res) => {
    const { id } = req.params;
    projects
      .getProject(id)
      .then(project => {
        if (!project) {
          return res.status(404).json({
            message: "Can not find project with specified ID."
          });
        }
        res.status(200).json(project);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });


const port = 8000;
server.listen(port, () => console.log(`\n== Port: ${port} ==\n `));