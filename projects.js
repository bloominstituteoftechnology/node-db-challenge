const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
    getProjects,
    getProject,
    addProject,
  };

  function getProjects() {
    return db("projects");
  }

  function getProject(id) {
    return db("projects")
      .select("projects.name", "projects.description")
      .where({ "projects.id": id })
  }

  function addProject(project) {
    return db("projects")
      .insert(project)
      .into("projects");
  }
