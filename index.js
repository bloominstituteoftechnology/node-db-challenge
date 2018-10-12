const express = require("express");
const db = require("knex")(require("./knexfile").development);
const cors = require("cors");
const _ = require("lodash");

const server = express();

const booleanMap = (...props) => {
  return function(obj) {
    return props.reduce((acc, next) => ({ ...acc, [next]: !!acc[next] }), obj);
  };
};

server.use(cors());
server.use(express.json());

server
  .route("/api/projects")
  .get(function(req, res, next) {
    db("projects")
      .then(data => res.status(200).json(data.map(booleanMap("complete"))))
      .catch(next);
  })
  .post(function(req, res, next) {
    const { name, description } = req.body;

    if (!name || !description)
      return res
        .status(400)
        .json({ message: "the name or the description is missing" });

    db("projects")
      .insert({ name, description })
      .then(([id]) =>
        res
          .status(201)
          .json({ message: "the project was created successfully", id })
      )
      .catch(next);
  });

server
  .route("/api/projects/:id")
  .put(function(req, res, next) {
    let { name, description, complete } = req.body;

    if (!name && !description && complete === undefined) {
      return res
        .status(400)
        .json({ message: "supply at least one field for an update" });
    }
    if (!_.isUndefined(complete)) complete *= 1;

    let updateObj = { name, description, complete };

    updateObj = _.omitBy(updateObj, _.isUndefined);

    db("projects")
      .update(updateObj)
      .where("id", req.params.id)
      .then(data => {
        if (!data)
          return res.status(404).json({ message: "the project was not found" });

        res.status(200).json({
          message: "the project was updated successfully",
          count: data
        });
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
  })
  .get(function(req, res, next) {
    const project = db("projects")
      .where("id", req.params.id)
      .first();
    const actions = db("actions").where("project_id", req.params.id);

    Promise.all([project, actions])
      .then(([project, actions]) => {
        if (!project)
          return res.status(404).json({ message: "the project was not found" });
        let result = booleanMap("complete")(project);
        result.actions = actions.map(action =>
          _.omit(booleanMap("complete")(action), "project_id")
        );

        res.status(200).json(result);
      })
      .catch(next);
  });

server
  .route("/api/actions")
  .get(function(req, res, next) {
    db("actions")
      .then(data => res.status(200).json(data.map(booleanMap("complete"))))
      .catch(next);
  })
  .post(function(req, res, next) {
    const { notes, description, project_id } = req.body;

    if (!notes || !description || !project_id)
      return res
        .status(400)
        .json({ message: "notes, description or project_id was missing" });

    db("actions")
      .insert({ notes, description, project_id })
      .then(([id]) =>
        res
          .status(201)
          .json({ message: "the action was created successfully", id })
      )
      .catch(next);
  });

server
  .route("/api/actions/:id")
  .put(function(req, res, next) {
    let { name, description, complete, project_id } = req.body;

    if (!name && !description && !project_id && complete === undefined) {
      return res
        .status(400)
        .json({ message: "provide at least one field for an update" });
    }
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
            : res.status(404).json({ message: "the action can not be found" })
      )
      .catch(next);
  })
  .get(function(req, res, next) {
    const contexts = db("actions as a")
      .select("c.id as id", "context")
      .join("action_contexts as ac", "ac.action_id", "a.id")
      .join("contexts as c", "ac.context_id", "c.id")
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
  });

server.use(function(err, _, res, _) {
  console.error(err);
  res
    .status(500)
    .json({ message: "You have broken something. try it again later" });
});

server.listen(process.env.PORT || 8800, () =>
  console.log("\n=== API listening on port 8800 === \n")
);
