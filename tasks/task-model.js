const db = require('../data/dbConfig');

module.exports = {
  findTasks,
  addTasks
};

function findTasks() {
  return db.select('*').from('tasks');
}

function addTasks(post) {
  return db
    .select('*')
    .from('tasks')
    .insert(post);
}
