const express = require("express");

const Projects = require("./project-model.js");

const router = express.Router();

router.get("/", (request, response) => {
  Projects.getProjects()
    .then(projects => {
      response.status(200).json(projects);
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({ error: "Failed to retrieve projects" });
    });
});

router.get("/:id", (request, response) => {
  const { id } = request.params;
  Projects.getProjectsById(id)
    .then(project => {
      response.status(200).json(project);
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({ error: "Project not found" });
    });
});

router.get("/:id/resources", (request, response) => {
  const { id } = request.params;
  Projects.getResources(id)
    .then(resource => {
      if (resource.length) {
        response.status(200).json(resource);
      } else {
        response.status(404).json({ message: "Resources not found" });
      }
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({ message: "Failed to retrieve resources " });
    });
});

router.get("/:id/tasks", (request, response) => {
  Projects.getTasks(request.params.id)
    .then(tasks => {
      response.status(200).json(tasks);
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({ errorMessage: "Failed to retrieve tasks" });
    });
});

router.post("/", (request, response) => {
  const projectData = request.body;

  Projects.addProjects(projectData)
    .then(project => {
      response.status(201).json(project);
    })
    .catch(error => {
      console.log("Error: ", error);
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.post("/:id/resources", (request, response) => {
  const resourceData = request.body;
  Projects.addResources(resourceData)
    .then(resource => {
      const index = { project_id: request.params.id, resource_id: resource.id };
      Projects.addResourceIndex(index)
        .then(resourceIndex => {
          response.status(201).json(resourceIndex);
        })
        .catch(error => {
          console.log("Error: ", error);
          response
            .status(404)
            .json({ error: "Failed to retrieve specified resource" });
        });
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({ message: "Failed to create new resource" });
    });
});

router.post("/:id/tasks", (request, response) => {
  const { id } = request.params;
  const tasks = { ...request.body, project_id: id };
  Projects.addTasks(tasks)
    .then(() => {
      Projects.getTasks(id)
        .then(tasks => {
          response.status(201).json(tasks);
        })
        .catch(error => {
          console.log("Error: ", error);
          response
            .status(404)
            .json({ errorMessage: "Failed to locate project" });
        });
    })
    .catch(error => {
      console.log("Error: ", error);
      response.status(500).json({ errorMessage: "Failed to add task" });
    });
});

module.exports = router;
