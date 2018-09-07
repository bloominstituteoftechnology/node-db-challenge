const db = require('../dbConfig');

module.exports = {
  get: function(id) {
    let query = db('actions');

    if(id) {
      query.where({ id });
    }

    return query;
  },
  insert: function(action) {
    return db('actions')
            .insert(action)
            .then(ids => ({ id: ids[0]}));
  },
  update: function(id, action) {
    return db('actions')
            .where({ id })
            .update(action);
  },
  remove: function(id) {
    return db('actions')
            .where({ id })
            .del();
  }
}
