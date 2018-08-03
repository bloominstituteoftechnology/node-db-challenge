const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  getProjectActions
};

function find() {
  return db('projects');
}

function findById(id) {
  return db('projects').where({ id });
}

function insert(project) {
  return db('projects').insert(project);
}

function update(id, project) {
  return db('projects')
    .where({ id })
    .update(project);
}

function remove(id) {
  return db('projects')
    .where({ id })
    .del();
}

function getProjectActions(id) {
  let project = {};
  db('projects')
    .where({ id })
    .then(found => {
      project = { ...found[0] };
    })
    .catch(err => {
      throw err;
    });

  db('actions')
    .where({ project_id: id })
    .then(found => {
      project.actions = found;
    })
    .catch(err => {
      throw err;
    });

  return project;
}
