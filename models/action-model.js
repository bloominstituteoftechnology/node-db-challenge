const db = require('../data/');

module.exports = {
  find, findById, add
}

function find() {
  return db('actions');
}

function findById(id) {
  return db('actions')
    .where({ id })
    .first() || null;
}

async function add(action) {
  const [id] = await db('actions')
    .insert(action, 'id')
    .returning('*');
  return findById(id);
}