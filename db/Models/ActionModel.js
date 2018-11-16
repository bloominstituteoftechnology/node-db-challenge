const db = require('../../knexConfig');

module.exports = {
  getActions,
  addActions,
  updateAction,
  deleteAction
};

function getActions(id) {
  if (id) {
    return db('actions').where({ id: id });
  } else {
    return db('actions');
  }
}

function addActions(action) {
  return db('actions').insert(action);
}

function updateAction(action, id) {
  return db('actions')
    .where({ id: id })
    .update(action);
}

function deleteAction(id) {
  return db('actions')
    .where({ id: id })
    .del();
}
