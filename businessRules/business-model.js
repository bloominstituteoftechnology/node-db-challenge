/* jshint esversion: 6 */
const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getResources,
  findById,
  addResources,
  addProject
};

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
