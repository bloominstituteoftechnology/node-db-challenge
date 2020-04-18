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

module.exports = {
  findTasks,
  findTaskById,
  addTasks,
};
