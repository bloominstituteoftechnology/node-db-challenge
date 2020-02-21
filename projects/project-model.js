const db = require("../data/db-config");

module.exports = {
  find,
  add,
  findTasks,
  addTask,
  findResources,
  addResource

};

function find() {
  return db("projects");
}

function add(project) {
  return db("projects").insert(project);
}

function findTasks() {
  return db("tasks");
}

function addTask(task) {
    return db("tasks").insert(task);
}

function findResources() {
    return db("resources");
}

function addResource(resource) {
    return db("resources").insert(resource);
}


