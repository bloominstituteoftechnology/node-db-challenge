const router = require("express").Router();

const Actions = require("./actionsmodelfile.js");

router.get("/", async (req, res) => {
  try {
    const [...actions] = await Actions.getActions();
    res.status(200).json({ actions: actions });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const action = await Actions.getAction(id);
    const contexts = await Actions.getContextsByAction(id);
    if (action) {
      res.status(200).json({ ...action, contexts });
    } else {
      res.status(404).json({ message: "Error 404: The action could not be found." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const { description, notes, completed, project_id } = req.body;
  if (!project_id) {
    return res.status(400).json({
      message: "Please specify a project id number for this action."
    });
  }
  if (!description || !notes || completed > 1) {
    return res.status(400).json({
      message:
        "Please provide a description, notes, and completed value for this action."
    });
  }
  try {
    const [id] = await Actions.addAction(req.body);
    const action = await Actions.getAction(id);

    res.status(201).json(action);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const count = await Actions.deleteAction(id);

    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Error 404: The action could not be found." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { description, notes, completed, project_id } = req.body;
  const updated = req.body;

  if (!project_id) {
    return res.status(400).json({
      message: "Please specify a project id number for this action."
    });
  }
  if (!description || !notes || completed > 1) {
    return res.status(400).json({
      message:
      "Please enter a name, description, and mark whether this project is completed or not."
    });
  }

  try {
    const count = await Actions.updateAction(id, updated);

    if (count > 0) {
      const action = await Actions.getAction(id);
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: "Error 404: The action could not be found." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;