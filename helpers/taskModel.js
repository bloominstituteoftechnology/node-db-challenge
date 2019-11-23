const db = require('../data/db-config');


// Return all Tasks
function find() {
    return db('task')
      .join('task.id', 'project.id')
      .select('task', 'project.name', 'project.desc')
  }

// Included to provide "under the hood" functionality so Add returns an object not an id
function findById(id) {
    return db('task').where({ id }).first();
    }

// Add new Task
function add(newTask) {
        db('task').insert(newTask)
          .then(ids => {
            return findById(ids[0]);
          });
        }

// Delete Task
function remove(id) {
    return db('task').where({ id }).del();
}

module.exports = {
    find,
    findById,
    add,
    remove
};