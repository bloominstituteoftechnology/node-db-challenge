const db = require('../db');

module.exports = {
  get: (id) => {
    let actions = db('actions');
    if (id) {
      console.log(id);
      return actions.where('id', id).first();
    }
    return actions;
  },
  insert: (action) => {
    return db('actions').insert(action);
  },
  update: (id, editedAction) => {
    return db('actions').where('id', id).update(editedAction);
  },
  delete: (id) => {
    return db('actions').where('id', id).del();
  }
}
