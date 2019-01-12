const db = require('../dbconfig');
const mapper = require('./mapper.js')

module.exports = {
  postAction,
}

function postAction(newAction) {
  return db('actions').insert(newAction)
}