const db = require('../database/dbConfiguration.js');

module.exports = {
  insert: project => {
    return db('projects').insert(project).then(ids => ({ id: ids[0] }));
  },
  update: (id, project) => {
    return db('projects').where('id', id).update(project);
  },
  remove: id => {
    return db('projects').where('id', id).del();
  }
};
