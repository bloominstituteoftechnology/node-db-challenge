const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);

function getProject(id) {
  return db('projects').join('actions', 'actions.project_id', '=', 'actions.id').select('*', 'projects.actions as actions')
}

function getProjects() {
  return db('projects');
}

function addProject(project) {
  return db.insert(project).into("projects");
}

module.exports = {
  getProject,
  getProjects,
  addProject
};
