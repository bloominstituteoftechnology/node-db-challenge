const db = require('../database/dbConfiguration.js');

module.exports = {
  get: function(id) {
    let query = db('contexts');
    if (id) {
      query.where('id', id).first();
    }
    
    return query;
  },
  insert: function(tag) {
    return db('contexts')
      .insert(tag)
      .then(ids => ({ id: ids[0] }));
  },
  update: function(id, tag) {
    return db('contexts')
      .where('id', id)
      .update(tag);
  },
  remove: function(id) {
    return db('contexts')
      .where('id', id)
      .del();
  },
};
