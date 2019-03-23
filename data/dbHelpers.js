const knex = require('knex');

const dbConfig = require('../knexfile.js');

const db = knex(dbConfig.development)


module.exports = {
    getAllProjects: () => {
        return db('projects')
    },

    getAllActions: () => {
        return db('actions')
    },

    addProject: (proj) => {
        return db('projects')
            .insert(proj)
            .then(res => {
                return res
            });
    },

    addAction: (act) => {
        return db('actions')
            .insert(act)
            .then(res => {
                return res
            });
    },

    getProjectsById: (id) => {
        return db('projects')
            .where({ id })
    },

    getActionsById: (id) => {
        return db('actions')
            .where({ id })
    },

    // getProjectsAndActions: (id) => {

    // }
  };

  