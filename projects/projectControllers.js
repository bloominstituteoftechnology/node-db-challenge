const knex = require("../database/db");

const projects = {
  getAll: () => {
    return knex("projects");
  },
  addOne: project => {
    return knex("projects").insert(project);
  },
  update: (id, project) => {
    return knex("projects")
      .where({ id })
      .update(project);
  },
  nuke: id => {
    return knex("projects")
      .where({ id })
      .del();
  }
};

module.exports = projects;
