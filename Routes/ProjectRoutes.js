const express = require("express");
const projects = require("../data/db.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const list = await projects("projects");
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  const addedProject = req.body;
  try {
    const ids = await projects.insert(addedProject).into("projects");
    res.status(201).json(ids[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await projects
      .select()
      .from("projects")
      .where(req.params)
      .first();
    try {
      const action = await projects.where("project_id", id).from("actions");
      console.log("action is: ", action);
      project.action = action;
      res.status(200).json(project);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
  /*try {
    const project = await projects
      .select()
      .from("projects")
      .where(req.params)
      .first();
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ error: `No project with the id exists.` });
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }*/
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await projects
      .where(req.params)
      .from("projects")
      .del();
    if (count !== 0) {
      res.status(200).json(count);
    } else {
      res.status(400).json({ error: "The project to be deleted couldn't be found." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const name = req.body;
  try {
    const count = await projects
      .where(req.params)
      .from("projects")
      .update(name);
    console.log("count is: ", count);
    if (count !== 0) {
      try {
        const updatedProject = await projects
          .select()
          .from("projects")
          .where(req.params);
        res.status(200).json(updatedProject);
      } catch (err) {
        res.status(404).json({ message: "The specific project does not exist." });
      }
    } else {
      res.status(400).json({ err: "That specific project couldn't be found." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
