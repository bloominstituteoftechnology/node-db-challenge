const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  findById,
  findProjectActions,
  add,
};

function findById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function findProjectActions(id) {
  return db('actions')
    .select('id', 'description', 'notes', 'completed')
    .where({ project_id: id });
}

function add(project) {
  return db('projects')
    .insert(project)
    .into('projects');
}
