const db = require('../data/');

module.exports = {
  getProjects
}

function getProjects() {
  return db('projects');
}