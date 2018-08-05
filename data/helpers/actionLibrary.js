const db = require('../db');
const mappers = require('./mappers');

module.exports = {
  get: (id) => {
    let actions = db('actions');

    if (id) {
      return actions.where('id', id)
                    .then(action => {
                      if (action.length > 0) {
                        return mappers.actionBool(action[0]);
                      } else {
                        return action;
                      }
                    });
    }

    return actions.then(actions => {
      return actions.map(action => mappers.actionBool(action));
    });
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
