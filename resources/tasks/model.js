const db = require("../../data/dbConfig");

function addTask(task, project_id) {
  return db("tasks")
    .insert({ ...task, project_id })
    .then(id => db("tasks").where({ id: id[0] }));
}

function getTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "project_id")
    .select(
      "t.description as task description",
      "notes",
      "t.completed",
      "p.name as project name"
    );
}

module.exports = {
  getTasks,
  addTask
};
