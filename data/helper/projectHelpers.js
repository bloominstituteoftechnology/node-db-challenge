const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);

function getProject(id) {
  return db
    .select("*")
    .from("projects")
    .where({ id });
}

function getProjects() {
  return db
    .select("*")
    .from("projects");
}

function addProject(project) {
  return db.insert(project).into("projects");
}

module.exports = {
  getProject,
  getProjects,
  addProject
};
