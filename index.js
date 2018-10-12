const express = require("express");
const db = require("knex")(require("./knexfile").development);
const cors = require("cors");
const _ = require("lodash");

const server = express();

const booleanMap = (...args) => {
  return object => {
    return args.reduce(
      (acumulated, next) => (
        { ...acumulated, [next]: !!acumulated[next] }, object
      )
    );
  };
};

server.use(cors());
server.use(express.json());

server
  .route("/api/projects")
  .get((req, res, next) => {
    db("projects")
      .then(response =>
        res.status(200).json(response.map(booleanMap("complete")))
      )
      .catch(next);
  })
  .post((req, res, next) => {
    const { name, description } = req.body;

    if (!name || !description)
      return res.status(400).json({ message: "name is missing" });

    if (!description)
      return res.status(400).json({ message: "description is missing" });

    db("projects")
      .insert({ name, description })
      .then(([id]) =>
        res
          .status(201)
          .json({ message: "the project has been created successfully", id })
      )
      .catch(next);
  });

app.route("/api/projects/:id").get((req, res, next) => {
  const project = db("projects")
    .where("id", req.params.id)
    .first();
  const actions = db("actions").where("project_id", req.params.id);

  Promise.all([project, actions])
    .then(([project, actions]) => {
      if (!project)
        return res
          .status(404)
          .json({ message: "the project has not been found" });
      let result = boolMapper("complete")(project);
      result.actions = actions.map(action =>
        _.omit(boolMapper("complete")(action), "project_id")
      );

      res.status(200).json(result);
    })
    .catch(next);
});

app.route("/api/actions").post(function(req, res, next) {
  const { notes, description, project_id } = req.body;

  if (!notes) return res.status(400).json({ message: "notes is missing" });
  if (!description)
    return res.status(400).json({ message: "description is missing" });
  if (!project_id)
    return res.status(400).json({ message: "project_id is missing" });

  db("actions")
    .insert({ notes, description, project_id })
    .then(([id]) =>
      res
        .status(201)
        .json({ message: "the action has been created successfully", id })
    )
    .catch(next);
});

server.listen(8800, () => {
  console.log(`\n === API listening on port 8800 ===\n`);
});
