const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const db = knex(knexConfig.development);
 module.exports = {   
    addProject,
    getProjectActions
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