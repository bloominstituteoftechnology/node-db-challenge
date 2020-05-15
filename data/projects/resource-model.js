const db = require("../../db-config");

module.exports = {
  addResource,
  findByResourcesId,
  findById,
};
// !!Build an API with endpoints for:
// adding resources.
// retrieving a list of resources.
// adding projects.
// retrieving a list of projects.
// adding tasks.
// retrieving a list of tasks. The list of tasks should include the project name and project description.

function findByResourcesId(id) {
  return db
    .select("pr.project_id", "r.name")
    .from("resources as r")
    .join("project_resources as pr", "pr.resources_id", "=", "r.id")
    .where({ "pr.project_id": id });
}

function findById(id) {
  return db("resources").where("id", id).first();
}

function addResource(resources) {
  // adding resources.
  return db("resources")
    .insert(resources, "id")
    .then((ids) => {
      return findById(ids[0]);
    });
}
