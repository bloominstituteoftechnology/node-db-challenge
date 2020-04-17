const db = require("../db-config");

module.exports = {
  find,
  findByProjectId,
  add,
};

function find() {
  return db("task")
    .join("project", "project.id", "task.project_id")
    .select(
      "task.id",
      "task.project_id",
      "task.description as task_description",
      "task.completed as task_completed",
      "project.name as project_name"
    );
}
function findByProjectId(project_id) {
  return db("task")
    .where({ project_id })
    .select("id", "description", "notes", "completed");
}
function add(taskData) {
  return db("task")
    .insert(taskData)
    .then(([id]) => db("task").where({ id }).first());
}
