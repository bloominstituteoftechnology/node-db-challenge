const db = require('../data/db-config');


// Return all Projects
function find() {
    return db('project');
  }

// Included to provide "under the hood" functionality so Add returns an object not an id
function findById(id) {
    return db('project').where({ id }).first();
    }

// Add new project
function add(newProj) {
      return db('project').insert(newProj)
          .then(ids => {
            return findById(ids[0]);
          });
        }

// Delete project
function remove(id) {
    return db('project').where({ id }).del();
}

module.exports = {
    find,
    findById,
    add,
    remove
};