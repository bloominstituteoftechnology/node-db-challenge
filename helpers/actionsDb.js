const db = require('../data/db.js');

module.exports = {
  // Get
  read: function () {
    let query = db('actions');
    return query;
  },
  // Add
  create: function (action) {
    return db('actions')
      .insert(action)
      .then(ids => ({ id: ids[0] }));
  },
  // Delete
  destroy: function (id) {
    return db('actions')
      .where('id', id)
      .del();
  },
  // Update
  update: function (id, user) {
    return db('actions')
      .where('id', id)
      .update(user);
  },
};