const db = require('../database/dbConfig.js');

module.exports = {
  get: function() {
    let query = db('contexts as c');
    return query;
  },
  insert: function(context) {
    return db('contexts')
      .insert(context)
      .then(ids => ({id: ids[0]}));
  },
    update: function(id, context) {
    return db('contexts')
      .where('context_id', id)
      .update(context);
  },
  remove: function(id) {
    return db('contexts')
      .where('context_id', id)
      .del();
  }
}