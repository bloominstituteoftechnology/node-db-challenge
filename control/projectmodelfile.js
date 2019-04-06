const db = require("../config/knexConfiguration.js");

module.exports = {
  getProjects,
  getProject,
  addProject,
  deleteProject,
  updateProject
};

function getProjects() {
  return db("projects");
}

function getProject(id) {
  return db("projects")
    .where({ id })
    .first();
}

function addProject(project) {
  return db("projects").insert(project);
}

function deleteProject(id) {
  return db("projects")
    .where({ id })
    .del();
}

function updateProject(id, updated) {
  return db("projects")
    .where({ id })
    .update(updated);
}