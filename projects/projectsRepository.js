const db = require('../configuration/db.js');

module.exports = {
  get: function(id) {
    let query = db('projects as p');
    if (id) {
      query
        .join('actions as a', 'a.projectId', 'p.id')
        .select('p.name', 'a.description')
        .where('p.id', id);
    }
    return query.then();
  }
};