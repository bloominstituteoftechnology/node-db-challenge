const db = require("./db-config");

module.exports = {
  addProject,
  getProjects,
  addResource,
  getResources,
  addTask,
  getTasks
};

function addProject(project) {
  return db("project").insert(project);
}

function getProjects() {
  return db("project");
}

function addResource(resource) {
  return db("resource").insert(resource);
}

function getResources() {
  return db("resource");
}

function addTask(task) {
  return db("task").insert(task);
}

function getTasks() {
  return db("task");
}
