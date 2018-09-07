const express = require("express");
const db = require("knex")(require("./knexfile").development);
const cors = require("cors");
const lo = require("lodash");

const app = express();

function boolMapper(...props) {
  return function(obj) {
    return props.reduce((acc, next) => ({ ...acc, [next]: !!acc[next] }), obj);
  };
}

app.use(cors());
app.use(express.json());

app
  .route("/api/projects")
  .get(function(req, res, next) {
    db("projects")
      .then(data => res.status(200).json(data.map(boolMapper("complete"))))
      .catch(next);
  })
  .post(function(req, res, next) {
    const { name, description } = req.body;

    if (!name || !description)
      return res.status(400).json({ message: "Name or description missing" });

    db("projects")
      .insert({ name, description })
      .then(([id]) =>
        res.status(201).json({ message: "Project created successfully", id })
      )
      .catch(next);
  });

app
  .route("/api/projects/:id")
  .put(function(req, res, next) {
    let { name, description, complete } = req.body;

    if (!name && !description && complete === undefined) {
      return res
        .status(400)
        .json({ message: "At least one field must be provided for an update" });
    }
    if (!lo.isUndefined(complete)) complete *= 1;

    let updateObj = { name, description, complete };

    updateObj = lo.omitBy(updateObj, lo.isUndefined);

    db("projects")
      .update(updateObj)
      .where("id", req.params.id)
      .then(data => {
        if (!data)
          return res.status(404).json({ message: "project not found" });

        res
          .status(200)
          .json({ message: "Project updated successfully", count: data });
      })
      .catch(next);
  })
  .delete(function(req, res, next) {
    db("projects")
      .delete()
      .where("id", req.params.id)
      .then(
        data =>
          data
            ? res
                .status(200)
                .json({ message: "Project deleted successfully", count: data })
            : res.status(404).json({ message: "Project cannot be found" })
      )
      .catch(next);
  })
  .get(function(req, res, next) {
    const project = db("projects")
      .where("id", req.params.id)
      .first();
    const actions = db("actions").where("project_id", req.params.id);

    Promise.all([project, actions])
      .then(([project, actions]) => {
        if (!project)
          return res.status(404).json({ message: "Project not found" });
        let result = boolMapper("complete")(project);
        result.actions = actions.map(action =>
          lo.omit(boolMapper("complete")(action), "project_id")
        );

        res.status(200).json(result);
      })
      .catch(next);
  });

app
  .route("/api/actions")
  .get(function(req, res, next) {
    db("actions")
      .then(data => res.status(200).json(data.map(boolMapper("complete"))))
      .catch(next);
  })
  .post(function(req, res, next) {
    const { notes, description, project_id } = req.body;

    if (!notes || !description || !project_id)
      return res
        .status(400)
        .json({ message: "notes, description or project_id missing" });

    db("actions")
      .insert({ notes, description, project_id })
      .then(([id]) =>
        res.status(201).json({ message: "Action created successfully", id })
      )
      .catch(next);
  });

app
  .route("/api/actions/:id")
  .put(function(req, res, next) {
    let { name, description, complete, project_id } = req.body;

    if (!name && !description && !project_id && complete === undefined) {
      return res
        .status(400)
        .json({ message: "At least one field must be provided for an update" });
    }
    if (!lo.isUndefined(complete)) complete *= 1;

    let updateObj = { name, description, complete, project_id };

    updateObj = lo.omitBy(updateObj, lo.isUndefined);

    db("actions")
      .update(updateObj)
      .where("id", req.params.id)
      .then(data => {
        if (!data) return res.status(404).json({ message: "action not found" });

        res
          .status(200)
          .json({ message: "action updated successfully", count: data });
      })
      .catch(next);
  })
  .delete(function(req, res, next) {
    db("actions")
      .delete()
      .where("id", req.params.id)
      .then(
        data =>
          data
            ? res
                .status(200)
                .json({ message: "action deleted successfully", count: data })
            : res.status(404).json({ message: "action cannot be found" })
      )
      .catch(next);
  })
  .get(function(req, res, next) {
    db("actions as a")
      .select({
        id: "a.id",
        description: "a.description",
        notes: "a.notes",
        complete: "a.complete",
        project_name: "p.name",
        project_description: "p.description",
        project_complete: "p.complete"
      })
      .where("a.id", req.params.id)
      .join("projects as p", "a.project_id", "p.id")
      .first()
      .then(
        data =>
          data
            ? res
                .status(200)
                .json(boolMapper("complete", "project_complete")(data))
            : res.status(404).json({ message: "action not found " })
      )
      .catch(next);
  });

app.use(function(err, _, res, _) {
  console.error(err);
  res.status(500).json({ message: "Something went wrong. Try again later" });
});

app.listen(process.env.PORT || 5000, () =>
  console.log(
    "\n=== Server up and running on port 5000 unless you changed it === \n"
  )
);
