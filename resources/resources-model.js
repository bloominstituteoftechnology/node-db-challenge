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

module.exports = {
  findResources,
  findResourceById,
  addResources,
};
