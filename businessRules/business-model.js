/* jshint esversion: 6 */
const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getResources,
  findById,
  addResources,
  addProject,
  addTask,
  getTasks,
  getTasksWithProject
};

function getTasksWithProject(project_id) {
  return db("tasks as t")
    .select(
      "project.name",
      "project.description",
      "t.description",
      "t.completed"
    )
    .where({ project_id })
    .join("projects", "projects.id", "t.project_id");
}

function findById(id) {
  return db("blog")
    .where({ id })
    .first();
}

//GET list of projects
function getProjects() {
  return db("projects");
}

//GET list of Resources

function getResources() {
  return db("resources");
}

//GET list of Tasks

function getTasks() {
  return db("tasks");
}

//ADD resource
function addResources(resource) {
  return db("resources")
    .insert(resource)
    .then(([id]) => {
      return findById(id);
    });
}

//ADD project
function addProject(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => {
      return findById(id);
    });
}

//ADD task
function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => {
      return findById(id);
    });
}
