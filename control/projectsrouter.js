const router = require("express").Router();

const Projects = require("./projectmodelfile.js");
const Actions = require("./actionsmodelfile.js");

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Projects.getProject(id);
    const actions = await Actions.getActionsByProject(id);
    if (project) {
      res.status(200).json({ ...project, actions });
    } else {
      res.status(404).json({ message: "Error 404: Project could not be found." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const { name, description, completed } = req.body;
  if (!name || !description || completed > 1) {
    return res.status(400).json({
      message:
        "Please enter a name, description, and mark whether this project is completed or not."
    });
  }
  try {
    const [id] = await Projects.addProject(req.body);
    const project = await Projects.getProject(id);

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const count = await Projects.deleteProject(id);

    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Error 404: The project could not be found." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;
  const updated = req.body;

  if (!name || !description || completed > 1) {
    return res.status(400).json({
      message:
        "Please enter a name, description, and mark whether this project is completed or not."
    });
  }

  try {
    const count = await Projects.updateProject(id, updated);

    if (count > 0) {
      const project = await Projects.getProject(id);
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "Error 404: Project could not be found." });
    }
  } catch (error) {}
});

module.exports = router;