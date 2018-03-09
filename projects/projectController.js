const db = require('../database/dbConfiguration.js');

module.exports = {
  get: function(id) {
    let query = db('projects');
    if (id) {
      query.where('id', id).first();
    }

    return query;
  },
  getProjectActions: function(actId) {
    return db('actions as a')
      .join('projects as p', 'p.id', 'a.actId')
      .select('a.id', 'a.text', 'p.name as project')
      .where('a.actId', actId);
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
  }
};
