const db = require('../database/dbConfiguration.js');

module.exports = {
  get: function(id) {
    let query = db('context');
    if (id) {
      query.where('id', id).first();
    }

    return query;
  },
  insert: function(ctxt) {
    return db('context')
      .insert(ctxt)
      .then(ids => ({ id: ids[0] }));
  },
  update: function(id, tag) {
    return db('context')
      .where('id', id)
      .update(ctxt);
  },
  remove: function(id) {
    return db('context')
      .where('id', id)
      .del();
  }
};
