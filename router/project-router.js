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

// router.get("/:id/tasks", (request, response) => {
//   const { id } = request.params;
//   Projects.getTasks(id)
//     .then(tasks => {
//       if (tasks.length) {
//         response.status(200).json(tasks);
//       } else {
//         response.status(404).json({ message: "Tasks not found" });
//       }
//     })
//     .catch(error => {
//       console.log("Error: ", error);
//       response.status(500).json({ message: "Failed to retrieve tasks" });
//     });
// }); // DOESN'T WORK

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
  const { id } = request.params;
  const resources = { ...request.body, project_id: id };
  Projects.addResources(resources)
    .then(inserted => {
      response.status(201).json(inserted);
    })
    .catch(error => {
      console.log("Error: ", error);
      res.status(500).json({ errorMessage: "Failed to add new resource" });
    });
}); // DOESN'T WORK

router.post("/:id/tasks", (request, response) => {
  const task = request.body;
  task.project_id = request.params.id;
  Projects.addTasks(task)
    .then(() => {
      Projects.getTasks(request.params.id)
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
}); // DOESN'T WORK

module.exports = router;
