const db = require('../database/dbConfiguration.js');

module.exports = {
  insert: project => {
    return db('projects').insert(project).then(ids => ({ id: ids[0] }));
  },
  update: (id, project) => {
    return db('projects').where('id', id).update(project);
  },
  remove: id => {
    return db('projects').where('id', id).del();
  },
  get: projectId => {
    return db('actions as a')
      .join('projects as p, p.id, a.projectId')
      .select('a.id, a.description, a.notes, a.completed, p.name')
      .where('a.projectId', proejctId);
  }
};
