const mappers = require('./mappers')
const knex = require('knex')
const knexConfig = require('../knexfile.js')
//have not used helper files yet
module.exports = {
  get: function(id) {
    let query = db('actions')

    if (id) {
      return query
        .where('id', id)
        .first()
        .then(action => mappers.actionToBody(action))
    }

    return query.then(actions => {
      return actions.map(action => mappers.actionToBody(action))
    })
  },
  insert: function(action) {
    return db('actions')
      .insert(action)
      .then(([id]) => this.get(id))
  },
  update: function(id, changes) {
    return db('actions')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null))
  },
  remove: function(id) {
    return db('actions')
      .where('id', id)
      .del()
  }
}

module.exports = knex(knexConfig.development)
