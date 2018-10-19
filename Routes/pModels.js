const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  
  getProjectActions: function(id) {
    return db("actions").where({ id });
  },
  insert: function(project) {
    return db('projects')
      .insert(project)
      .then(([id]) => this.get(id));
  },
  update: function(id, changes) {
    return db('projects')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  },
  remove: function(id) {
    return db('projects')
      .where('id', id)
      .del();
  },
  find() {
    return db('projects');
  },
  findById(id) {
      return db('projects')
        .where({ id })
        .first();
  }
};

