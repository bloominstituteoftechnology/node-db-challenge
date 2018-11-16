const db = require('../data/db');

module.exports = {
  getProjects: () => {
    return db('projects');
  },

  getProject: id => {
    return db('projects as p')
      .select('p.id', 'p.name', 'p.description', 'p.completed', 'a.id', 'a.description', 'a.notes', 'a.completed')
      .join('actions as a', 'a.project_id', 'p.id')
      .where('p.id', id);
  },

  addProject: project => {
    return db('projects').insert(project);
  },

  addAction: action => {
    return db('actions').insert(action);
  }
};
