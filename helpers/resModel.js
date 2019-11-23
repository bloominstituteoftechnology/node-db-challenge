const db = require('../data/db-config');


// Return all Resources
function find() {
    return db('resource');
  }

// Included to provide "under the hood" functionality so Add returns an object not an id
function findById(id) {
    return db('resource').where({ id }).first();
    }

// Add new Resource
function add(newRes) {
      return db('resource').insert(newRes)
          .then(ids => {
            return findById(ids[0]);
          });
        }

// Delete Resource
function remove(id) {
    return db('resource').where({ id }).del();
}

module.exports = {
    find,
    findById,
    add,
    remove
};