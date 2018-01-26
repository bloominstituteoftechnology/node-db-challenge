const db = require('../database/dbConfiguration.js');

module.exports = {
  get: function(id) {
    let query = db('actions');
    if (id) {
      query.where('id', id).first();
    }

    return query;
  },
  getActionPosts: function(actionId) {
    return db('actions as p')
      .join('actions as u', 'u.id', 'p.actionId')
      .select('p.id', 'p.text', 'u.name as postedBy')
      .where('p.actionId', actionId);
  },
  insert: function(actions) {
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
