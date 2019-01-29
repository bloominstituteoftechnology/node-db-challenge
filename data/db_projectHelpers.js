const knex = require('knex');

const db_config = require('../knexfile.js');

const db = knex(db_config.development);

module.exports = {

    getProjects: () => {
        return db('project');
    },

    getProjectById: (id) => {
        return db('project').where('id', id).leftJoin('action', 'project.id', 'action.project_id');
    },

    addProject: (project) => {
        return db('project').insert(project);
    }
};