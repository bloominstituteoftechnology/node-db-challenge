const express = require("express");

const Projects = require("./Projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getRecipes()
    .then((Projects) => {
      res.json(Projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Projects" });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;

  Projects.getShoppingList(id)
    .then((project) => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Projects" });
    });
});

router.get("/:id/instruction", (req, res) => {
  const { id } = req.params;

  Projects.getInstructions(id)
    .then((tasks) => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res
          .status(404)
          .json({ message: "Could not find tasks for given scheme" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.get("/:id/recipes", (req, res) => {
  const { id } = req.params;

  Projects.getRecipesByIngredients(id)
    .then((tasks) => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res
          .status(404)
          .json({ message: "Could not find tasks for given scheme" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new scheme" });
    });
});

router.post("/:id/tasks", (req, res) => {
  const taskData = req.body;
  const { id } = req.params;

  Projects.findById(id)
    .then((project) => {
      if (project) {
        Projects.addtask(taskData, id).then((task) => {
          res.status(201).json(task);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.findById(id)
    .then((project) => {
      if (project) {
        Projects.update(changes, id).then((updatedproject) => {
          res.json(updatedproject);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update scheme" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Projects.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete scheme" });
    });
});

module.exports = router;
