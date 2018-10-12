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
  return db('actions');
}

function getById(id) {
  return db('actions')
    .where({ id })
    .first();
}

function insert(action) {
  return db('actions')
    .insert(action)
    .into('actions')
}

function update(id, changes) {
  return db('actions')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('actions')
    .where({ id })
    .del();
}