const db = require("../../data/dbConfig");

function getProjects() {
  return db("projects");
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => db("projects").where({ id: ids[0] }));
}

module.exports = {
  getProjects,
  addProject
};
