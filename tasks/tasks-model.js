const db = require('../data/db-config.js');

function findTasks() {
  return db('tasks');
}

function findTaskById(id) {
  return db('tasks').where({ id });
}

function addTasks(resourceData) {
  return db('tasks')
    .insert(resourceData);
}
function update(change, id) {
  return db('tasks').where({ id }).update(change);
}

function remove(id) {
  return db('tasks')
    .where({ id }).del();
}

module.exports = {
  findTasks,
  findTaskById,
  addTasks,
  update,
  remove,
};
