const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);
const mappers = require('./mappers');

module.exports = {
  get: function(id) {
    let query = db('action');

    if (id) {
      return query
        .where('id', id)
        .first()
        .then(action => mappers.actionToBody(action));
    }

    return query.then(actions => {
      return actions.map(action => mappers.actionToBody(action));
    });
  },
  insert: function(action) {
    return db('action')
      .insert(action)
      .then(([id]) => this.get(id));
  },
};