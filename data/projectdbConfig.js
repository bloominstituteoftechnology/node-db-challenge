const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getProjects() {
    return db('projects')
  },

  addProject(project) {
    return db('projects')
            .insert(project)
            .then(ids => {id: ids[0]} )
  }
}