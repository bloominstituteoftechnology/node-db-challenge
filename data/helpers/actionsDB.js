const db = require('../dbConfig.js');

module.exports = {
  get: function(id) {
    let query = db('actions');
    if (id) {
      query.where('id', Number(id)).first();
    }

    return query;
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
