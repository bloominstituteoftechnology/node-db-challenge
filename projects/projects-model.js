const db = require('../data/db-config.js');

function find() {
  return db('projects');
}

module.exports = {
  find
}