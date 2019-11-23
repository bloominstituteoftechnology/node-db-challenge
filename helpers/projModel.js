const db = require('../data/db-config');


// Return all Projects
function find() {
  let query = db('project as p');

  // code found on interwebs, commented to show understanding
  // returns the array of projects which are then mapped over with intToBoolean for conversion
  return query.then(projects => {
      return projects.map(project =>
          project = { ...project, complete: intToBoolean(project.complete) }

      );
  });
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

function intToBoolean(int) {

  return int === 1 ? true : false;
}

module.exports = {
    find,
    findById,
    add,
    remove,
    intToBoolean
};