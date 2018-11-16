const db = require('../dbConfig');

module.exports = {
  get,
  insert
};

function get(id) {
  let query = db('action');
  if (id) return query.where({ id: Number(id) }).first();
  return query;
}

function insert(action) {
  return db('action').insert(action);
}
