const db = require('../database/dbConfig.js');

module.exports = {
  get: function(id) {
    let query = db('actions');
    if (id) {
      query.where('id', id).first();
    }

    return query;
  },
  getProjectsAction: function(actionId) {
    return db('projects as p')
      .join('actions as a', 'a.id', 'p.Id')
      .select('p.id', 'p.name', 'a.description')
      .where('p.id', userId);
  },
  insert: function(action) {
    return db('actions')
      .insert(action)
      .then(ids => ({ id: ids[0] }));
  },
  update: function(id, action) {
    return db('actions')
      .where('id', id)
      .update(action);
  },
  remove: function(id) {
    return db('actions')
      .where('id', id)
      .del();
  },
};