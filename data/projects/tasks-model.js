const db = require("../../db-config");

module.exports = {
  addTask,
  findByTaskId,
  findByOneTaskId,
};
// !!Build an API with endpoints for:

function findByTaskId(id) {
  // retrieving a list of tasks. The list of tasks should include the project name and project description.
  return db
    .select(
      "p.name",
      "p.descriptions as projectDescription",
      "t.id as TaskNumber",
      "t.descriptions as taskDescription"
    )
    .from("tasks as t")
    .join("project as p", "t.project_id", "=", "p.id")
    .where({ "t.project_id": id });
}

function findByOneTaskId(id) {
  return db("tasks").where("id", id).first();
}

function addTask(tasks) {
  // adding resources.
  return db("tasks")
    .insert(tasks, "id")
    .then((ids) => {
      return findByOneTaskId(ids[0]);
    });
}
