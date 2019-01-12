const express = require("express");
const DB = require("./data/helpers/");
const SERVER = express();
const PORT = process.env.PORT || 3456;

SERVER.use(express.json());

// ADD A NEW PROJECT TO THE DB
SERVER.post("/api/projects", (req, res) => {
  const { project } = req.body;
  console.log(project);
  DB.addProject(project)
    .then(result => {
      res.status(201).json({ result });
    })
    .catch(err => {
      res.status(500).json({ error: "error code: NOPOSPJ" });
    });
});

// ADD A NEW ACTION TO A PROJECT
SERVER.post("/api/projects/:id/actions", (req, res) => {
  const { action } = req.body;
  const { id } = req.params;
  const newAction = Object.assign({}, action, { project_id: id });

  DB.addAction(newAction)
    .then(result => {
      res.status(201).json({ message: "New action was created." });
    })
    .catch(err => {
      res.status(500).json({ error: "error code: NOPOSAC" });
    });
});

// GET A PROJECT BY ID
SERVER.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  DB.getProject(id)
    .then(result => {
      result = result[0];
      DB.getActions(id).then(actions => {
        const project = Object.assign({}, result, { actions: actions });
        res.json({ project });
      });
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

SERVER.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
