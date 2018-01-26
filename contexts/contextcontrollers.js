const db = require('../database/dbConfig.js');

module.exports = {
  get: function(id) {
    let query = db('contexts');
    if (id) {
      query.where('id', id).first();
    }
    
    return query;
  },
  insert: function(context) {
    return db('contexts')
      .insert(context)
      .then(ids => ({ id: ids[0] }));
  },
  update: function(id, context) {
    return db('contexts')
      .where('id', id)
      .update(context);
  },
  remove: function(id) {
    return db('contexts')
      .where('id', id)
      .del();
  },
};