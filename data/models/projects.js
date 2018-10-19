const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

 module.exports = {
    addProject,
    getProjectActions,
    findById,
    find
};

const find = () => {
    return db("projects");
};

const findById = id => {
    return db("projects")
      .where({ id })
      .first();
  };

function addProject(project) {
    return db('projects')
    .insert(project)
    .into('projects');
}

function getProjectActions(id) {
  return db
    .where({ project_id: id })
    .select("id", "description", "notes", "complete")
    .from("actions");
};
