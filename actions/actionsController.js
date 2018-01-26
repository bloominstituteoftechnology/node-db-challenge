const db = require('../database/dbConfiguration.js');

module.exports = {
  insert: action => {
    return db('actions').insert(action).then(ids => ({ id: ids[0] }));
  },
  update: (id, action) => {
    return db('actions').where('id', id).update(action);
  },
  remove: id => {
    console.log(`deleting ${id}`);
    return db('actions').where('id', id).del();
  }
};
