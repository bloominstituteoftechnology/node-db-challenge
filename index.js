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

server
  .route("/api/projects/:id")
  .get((req, res, next) => {
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
  })
  .put(function(req, res, next) {
    // consolidated
    let { name, description, complete } = req.body;

    if (!name && !description && complete === undefined) {
      return res.status(400).json({
        message: "at least one of the fields must be provided for an update"
      });
    }
    if (!_.isUndefined(complete)) complete *= 1; // flip the completed via multiplication

    let updateObj = { name, description, complete };

    // used lodash here
    updateObj = _.omitBy(updateObj, _.isUndefined);

    db("projects")
      .update(updateObj)
      .where("id", req.params.id)
      .then(data => {
        if (!data)
          return res.status(404).json({ message: "the project was not found" });

        res
          .status(200)
          .json({ message: "the project updated successfully", count: data });
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
            ? res.status(200).json({
                message: "the project was deleted successfully",
                count: data
              })
            : res.status(404).json({ message: "the project cannot be found" })
      )
      .catch(next);
  });

server
  .route("/api/actions")
  .post(function(req, res, next) {
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
  })
  .get(function(req, res, next) {
    db("actions")
      .then(data => res.status(200).json(data.map(booleanMap("complete"))))
      .catch(next);
  });

server
  .route("/api/actions/:id")
  .get(function(req, res, next) {
    const contexts = db("actions as a")
      .select("ctx.id as id", "context")
      .join("action_contexts as ac", "ac.action_id", "a.id")
      .join("contexts as ctx", "ac.context_id", "ctx.id")
      .where("a.id", req.params.id);

    const action = db("actions as a")
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
      .first();

    Promise.all([action, contexts])
      .then(([action, contexts]) => {
        if (!action)
          return res.status(404).json({ message: "the action was not found " });

        const result = {
          ...booleanMap("complete", "project_complete")(action),
          contexts
        };

        return res.status(200).json(result);
      })
      .catch(next);
  })
  .put(function(req, res, next) {
    let { name, description, complete, project_id } = req.body;

    // consolidated if
    if (!name && !description && !project_id && complete === undefined) {
      return res.status(400).json({
        message: "at least one field should be provided for an update"
      });
    }
    // using lodash here
    if (!_.isUndefined(complete)) complete *= 1;

    let updateObj = { name, description, complete, project_id };

    updateObj = _.omitBy(updateObj, _.isUndefined);

    db("actions")
      .update(updateObj)
      .where("id", req.params.id)
      .then(data => {
        if (!data)
          return res.status(404).json({ message: "the action was not found" });

        res.status(200).json({
          message: "the action was updated successfully",
          count: data
        });
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
            ? res.status(200).json({
                message: "the action was deleted successfully",
                count: data
              })
            : res.status(404).json({ message: "the action cannot be found" })
      )
      .catch(next);
  });

// use lodash as some middleware for error handling
server.use((err, _, res) => {
  console.error(err);
  res
    .status(500)
    .json({ message: "you borke something. try again later... Much Later!" });
});

server.listen(8800, () => {
  console.log(`\n === API listening on port 8800 ===\n`);
});
