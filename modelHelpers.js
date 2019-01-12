const dbConfig = require('./knexfile');

const knex = require('knex');

const db = knex(dbConfig.development);

module.exports = {
  addProject,
  addAction,
  getProjects,
  getProject,
  getActions
};

function addProject(project) {
  return db('projects').insert(project);
}

function addAction(action) {
  return db('action').insert(action);
}

function getProjects() {
  return db('projects');
}

function getProject(id) {
  return db('projects')
    .leftJoin('actions', 'project_id', 'project.id')
    .where({ id });
}

function getActions() {
  return db('actions');
}
