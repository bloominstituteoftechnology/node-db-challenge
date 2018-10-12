const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('projects');
}

function getById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function insert(project) {
  return db('projects')
    .insert(project)
    .into('projects')
}

function update(id, changes) {
  return db('projects')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('projects')
    .where({ id })
    .del();
}