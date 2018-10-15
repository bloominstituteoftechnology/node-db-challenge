const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  add,
  update,
  remove
}

function find() {
  return db('actions')
}

function findById(id) {
  return db('acitons')
    .where({ id })
    .first()
}

function add(action) {
  return db('actions')
    .insert(action)
    .into('actions')
}

function update(id, changes) {
  return db('actions')
    .where({ id })
    .update(changes)
}

function remove(id) {
  return db('actions')
    .where({ id })
    .del();
}