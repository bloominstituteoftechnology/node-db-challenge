const db = require('../dbConfig');

module.exports = {
  get,
  insert,
  update,
  remove
};

function get(id) {
  let query = db('action');
  if (id) return query.where({ id: Number(id) }).first();
  return query;
}

function insert(action) {
  return db('action').insert(action);
}

function update(id, action) {
  return db('action')
    .where({ id: Number(id) })
    .update(action);
}

function remove(id) {
  return db('action')
    .where({ id: Number(id) })
    .del();
}
