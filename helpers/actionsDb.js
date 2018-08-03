const db = require('../data/db.js');

module.exports = {
  // Get
  read: function () {
    let query = db('projects');
    return query;
  },
  // Add
  create: function (project) {
    return db('projects')
      .insert(project)
      .then(ids => ({ id: ids[0] }));
  },
  // Delete
  destroy: function (id) {
    return db('projects')
      .where('id', id)
      .del();
  },
  // Update
  update: function (id, user) {
    return db('projects')
      .where('id', id)
      .update(user);
  },
};