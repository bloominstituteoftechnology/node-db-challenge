const knex = require("knex");

const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  getProjects() {
    return db("projects");
  },

  addProject(project) {
    return db("projects")
      .insert(project)
      .into("projects");
  },

  getProject(id) {
    return db("projects")
      .select({
        id: "projects.id",
        name: "projects.name",
        description: "projects.description",
        completed: "projects.completed",
        actionStyff: "actions.description"
      })
      .join("actions", "actions.project_id", "projects.id")
      .where("projects.id", id);
  },

  getActions() {
    return db("actions");
  },

  addActions(action) {
    return db("actions").insert(action);
  }
};
