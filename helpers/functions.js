const config = require('../knexfile.js');
const knex = require('knex');
const db = knex(config.development);
const dbA = require('./action_functions.js')

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('projects');
}

function findById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function add(project) {
  return db('projects')
    .insert(project)
    .into('projects');
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