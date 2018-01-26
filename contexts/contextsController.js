const db = require('../database/dbConfiguration.js');

module.exports = {
  insert: context => {
    return db('contexts').insert(context).then(ids => ({ id: ids[0] }));
  },
  update: (id, context) => {
    return db('contexts').where('id', id).update(context);
  },
  remove: id => {
    return db('contexts').where('id', id).del();
  }
};
