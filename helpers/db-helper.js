const db = require('../data/db');

module.exports = {
  getProjects: () => {
    return db('projects');
  },

  addProject: project => {
    return db('projects').insert(project);
  }
};
