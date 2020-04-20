const db = require('../data/db-config.js');

function findResources() {
  return db('resources');
}

function findResourceById(id) {
  return db('resources').where({ id });
}

function addResources(resourceData) {
  return db('resources')
    .insert(resourceData);
}
function update(change, id) {
  return db('resources').where({ id }).update(change);
}
function remove(id) {
  return db('resources')
    .where({ id }).del();
}

module.exports = {
  findResources,
  findResourceById,
  addResources,
  update,
  remove,
};
