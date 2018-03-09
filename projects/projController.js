const db = require('../database/dbConfig.js');

module.exports = {
  get: function() {
    let query = db('projects as p');
    return query;
  },
  insert: function(project) {
    return db('projects')
      .insert(project)
      .then(ids => ({id: ids[0]}));
  },
    update: function(id, project) {
    return db('projects')
      .where('proj_id', id)
      .update(project);
  },
  remove: function(id) {
    return db('projects')
      .where('proj_id', id)
      .del();
  }
}