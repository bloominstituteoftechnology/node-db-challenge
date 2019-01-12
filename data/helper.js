const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

module.exports = {
  getProjects: () => {
    return db("projects");
  },
  addProject: project => {
    return db.insert(project).into("projects");
  },
  getActions: () => {
    return db("actions");
  },
  addAction: action => {
    return db.insert(action).into("actions");
  }
};
