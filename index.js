// external imports
const express = require("express");
const knex = require("knex");

//internal imports
const knexConfig = require("./knexfile");

// init server and db
const db = knex(knexConfig.development);
const server = express();

//middleware
server.use(express.json());

//MVP endpoints
//POST new project
server.post("/api/projects", (req, res) => {
  const project = req.body;
  if (!project.name || !project.description) {
    res.status(400).json({
      message: "Please fill out the name and description for the new project."
    });
  } else {
    project.completed && project.completed != undefined
      ? (project.completed = "true")
      : (project.completed = "false");
    db("projects")
      .insert(project)
      .then(id => res.status(201).json(id))
      .catch(err =>
        res
          .status(500)
          .json({ error: "Error while attempting to save new project." })
      );
  }
});

//POST new action
server.post("/api/actions", (req, res) => {
  const action = req.body;
  if (!action.project_id || !action.description) {
    res.status(400).json({
      message: "Please include a project ID and description for the new action."
    });
  } else {
    action.completed && action.completed != undefined
      ? (action.completed = "true")
      : (action.completed = "false");
    db("projects")
      .where({ id: action.project_id })
      .then(project => {
        if (!project || !project.length) {
          res.status(404).json({ message: "No project with that ID exists." });
        } else {
          db("actions")
            .insert(action)
            .then(id => res.status(201).json(id))
            .catch(err =>
              res
                .status(500)
                .json({ error: "Error while attempting to save new action." })
            );
        }
      });
  }
});

//GET project by ID
server.get("/api/projects/:id", async (req, res) => {
  const { id } = req.params;
  try {
    //will resolve both promise blocks at once with Promise.all, await can go there

    // first retrieve the project specified by the id, using .first() since it will still return the project in an array
    const projectPromise = db("projects")
      .where("projects.id", "=", id)
      .first();

    //retrieve all actions linked to the specified project via the project_id
    const actionPromise = db("actions")
      .join("projects", "actions.project_id", "=", "projects.id")
      //choose what you want returned and match it to the README structure
      .select(
        "actions.id",
        "actions.description",
        "actions.additional_notes",
        "actions.completed"
      )
      .where("actions.project_id", "=", id);

    // return both promises on an awaited Promise.all, and store it in a temp constant for deconstruction
    const result = await Promise.all([projectPromise, actionPromise]);
    const [project, actions] = result;

    //account for null/undefined edge cases
    project.completed !== true ? (project.completed = false) : null;

    //account for null/undefined edge cases

    actions.forEach(action => {
      action.completed !== true
        ? (action.completed = false)
        : (action.completed = true);
    });
    return project // use ternary to first check if a project was actually returned
      ? res.status(200).json({ ...project, actions }) // if yes, return the project with list of associated actions
      : res.status(404).json({ message: "No project with that ID exists." }); //if not, return 404
  } catch (err) {
    res.status(500).json({
      error: "An error occurred while retrieving this project: ",
      err
    });
  }
});

//listener
const port = 8000;
server.listen(port, () => console.log(`\n API running on port ${port}`));
