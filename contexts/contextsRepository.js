const db = require('../configuration/db.js');

module.exports = {
  get: function(id) {
    let query = db('contexts');
    if (id) {
      query.where('id', id);
    }
    return query.then();
  },
};