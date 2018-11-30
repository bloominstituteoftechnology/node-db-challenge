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
  },

  getFullProject(id) {  
    return db('projects')
      .where({ id: Number(id) })
      .then(project => {
        db('actions')
        .where({ projectNum: id})
        .then(action => {
          return res.status(201).json({...project, actions:action})
        })
        .catch(err => {
          return res.status(500).json({message: 'error finding project', err})
        })
      })
  }

}