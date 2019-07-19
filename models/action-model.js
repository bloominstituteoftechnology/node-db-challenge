const db = require('../data/');

module.exports = {
  getActions
}

function getActions() {
  return db('actions');
}