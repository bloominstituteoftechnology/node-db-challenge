const db = require('../database/dbConfig.js');

module.exports = {
  get: function() {
    let query = db('actions as a');
    return query;
  },
  insert: function(action) {
    return db('actions')
      .insert(action)
      .then(ids => ({id: ids[0]}));
  },
    update: function(id, action) {
    return db('actions')
      .where('action_id', id)
      .update(action);
  },
  remove: function(id) {
    return db('actions')
      .where('action_id', id)
      .del();
  }
}