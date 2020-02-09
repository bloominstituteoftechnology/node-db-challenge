const db = require("../data/db-config.js");

const find = () => {
  return db("tasks")
    .select("projects.name as project name")
    .select("projects.description as project description")
    .select("tasks.description as Task description")
    .select("tasks.notes as Task Notes")
    .select("projects.id as ProjectID")
    .join("projects", "tasks.project_id", "=", "projects.id");
};

const add = tasks => {
  return db("tasks").insert(tasks);
};

module.exports = {
  find,
  add
};
