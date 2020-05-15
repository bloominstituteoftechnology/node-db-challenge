const db = require('../data/dbConfig');

function getResources() {
  return db("resources");
}

function getProjects() {
  return db("projetcs")
}

function getTasks() {
  return db("tasks")
  .join("projects", "tasks.description")
  .where("project_id", projectId)
}

module.exports = {
  getResources,
  getProjects,
  getTasks
}
