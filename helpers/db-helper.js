const db = require('../data/db');

module.exports = {
  getProjects: () => {
    return db('projects');
  },

  getProject: id => {
    return db('projects')
      .where({ id: Number(id) })
      .select('id', 'name', 'description', 'completed');
  },

  getProjectActions: id => {
    return db('actions')
      .select('id', 'description', 'notes', 'completed')
      .where({ project_id: Number(id) });
  },

  addProject: project => {
    return db('projects').insert(project);
  },

  addAction: action => {
    return db('actions').insert(action);
  }
};
