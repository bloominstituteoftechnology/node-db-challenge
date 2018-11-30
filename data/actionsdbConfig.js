const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getActions() {
    return db('actions')
  },

  addAction(action) {
    return db('actions')
            .insert(action)
            .then(ids => {id: ids[0]} )
  }
}

//{...project,actions:action}