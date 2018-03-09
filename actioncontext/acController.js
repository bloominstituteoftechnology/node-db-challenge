const db = require('../database/dbConfig.js');

module.exports = {
  get: function() {
    let query = db('actioncontext as ac');
    return query;
  },
  insert: function(action) {
    return db('actioncontext')
      .insert(action)
      .then(ids => ({id: ids[0]}));
  },
    update: function(id, action) {
    return db('actioncontext')
      .where('id', id)
      .update(action);
  },
  remove: function(id) {
    return db('actioncontext')
      .where('id', id)
      .del();
  }
}