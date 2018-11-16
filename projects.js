const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  getProjects,
  getProject,
  addProject
};

function getProjects() {
  return db("projects");
}

function getProject(id) {
    return db("projects")
      .join("actions")
      .select("projects.id", "projects.name", "projects.description", "projects.completed", "actions.id as ID", "actions.description as Description", "actions.notes as Notes", "actions.completed as Completed")
      .where({ "projects.id": id });
  }

function addProject(project) {
  return db("projects")
    .insert(project)
    .into("projects");
}
