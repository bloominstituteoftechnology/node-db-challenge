const db = require('../data/dbConfig.js');

module.exports = {

  getAll: function() {
    return db('projects');
  },
  get: function(id) {
    let query = db('projects');
    if (id) {
      query.where('id', Number(id)).first();
    }
    return query;
  },
  getProject: function(id) {
    return db('projects as p')
      .join('actions as a', 'p.id', 'a.projectId')
      .select('p.name as projectName', 'p.description as projectDescription', 'p.iscomplete as projectIsComplete', 'a.description as actionDescription', 'a.notes as actionNotes', 'a.iscomplete as actionIsComplete')
      .where('p.id', id);
  },
  insert: function(project) {
    return db('projects')
      .insert(project)
      .then(ids => ({ id: ids[0] }));
  },
  update: function(id, project) {
    return db('projects')
      .where('id', id)
      .update(project);
  },
  remove: function(id) {
    return db('projects')
      .where('id', id)
      .del();
  },
};