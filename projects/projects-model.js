const db = require("../data/db-config");

module.exports = { find, getByID, add, getTasks, addTask, remove };

function find() {
  return db("projects");
}

function getByID(id) {
  return db("projects").where({ id });
}

function add(project) {
  return db("projects").insert(project);
}

function getTasks(id) {
  return db("projects as p")
    .join("tasks as t", "t.projects_id", "p.id")
    .select(
      "p.project_name",
      "p.project_description",
      "t.task_description",
      "t.notes",
      "t.task_completed"
    )
    .where({ projects_id: id });
}

function addTask(id, tasks) {
  return db("tasks")
    .insert(tasks)
    .where({ projects_id: id });
}

function remove(id) {
  return db("projects")
    .where({ id })
    .del();
}
