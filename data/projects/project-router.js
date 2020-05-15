const express = require("express");

const Projects = require("./project-model");
const Resources = require("./resource-model");
const Tasks = require("./tasks-model");

const router = express.Router();

router.post("/addResources", (req, res) => {
  // adding resources.
  const resourceData = req.body;

  Resources.addResource(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

router.get("/:id/resources", (req, res) => {
  // retrieving a list of resources.
  const { id } = req.params;
  Resources.findByResourcesId(id)
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.post("/addProject", (req, res) => {
  // adding projects.
  const projectData = req.body;

  Projects.addProject(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.get("/:id/tasks/project", (req, res) => {
  // retrieving a list of resources.
  const { id } = req.params;
  Projects.findByProjectId(id)
    .then((Projects) => {
      res.json(Projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Projects" });
    });
});

router.get("/:id/project", (req, res) => {
  // retrieving a list of resources.
  const { id } = req.params;
  Projects.findById(id)
    .then((Projects) => {
      res.json(Projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Projects" });
    });
});

router.post("/addTask", (req, res) => {
  // adding projects.
  const taskData = req.body;

  Tasks.addTask(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

router.get("/:id/detail", (req, res) => {
  // retrieving a list of resources.
  const { id } = req.params;
  Tasks.findByTaskId(id)
    .then((Projects) => {
      res.json(Projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get a list of Tasks" });
    });
});

// router.get("/:id/detail", (req, res) => {
//   // retrieving a list of tasks. The list of tasks should include the project name and project description.
//   Projects.getResources()
//     .then((Projects) => {
//       res.json(Projects);
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Failed to get Projects" });
//     });
// });
module.exports = router;
