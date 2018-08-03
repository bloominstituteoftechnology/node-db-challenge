const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function find() {
  return db('actions');
}

function findById(id) {
  return db('actions').where({ id });
}

function insert(action) {
  return db('actions').insert(action);
}

function update(id, action) {
  return db('actions')
    .where({ id })
    .update(action);
}

function remove(id) {
  return db('actions')
    .where({ id })
    .del();
}
