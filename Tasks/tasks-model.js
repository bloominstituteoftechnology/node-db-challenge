const db = require("../db-config");

module.exports = {
  getTasks,
  insert
};

function getTasks(id) {
  let query = db("tasks")
    .join("projects", "projects.id", "tasks.projectId")
    .select(
      "tasks.id",
      "tasks.taskDescription",
      "tasks.taskNotes",
      "tasks.Completed",
      "tasks.projectId",
      "projects.projectName",
      "projects.projectDescription"
    );
  if (id) {
    return query.where("tasks.id", id);
  } else {
    return query;
  }
}

function insert(task) {
  return db("tasks")
    .insert(task, "id")
    .then(([id]) => this.getTasks(id));
}