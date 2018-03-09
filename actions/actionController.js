const db = require('../database/dbConfiguration.js');

module.exports = {
  insert: function(action) {
    return db('actions')
      .insert(post)
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
  }
};
