const knex = require('../database/db');

const projects = {
    getAll: () => {
        return knex('projects');
    },
    findOne: id => {
        return knex('projects')
            .where({ id })
            .select('id', 'name', 'description', 'completed')
            .join('actions', 'actions.projectId', '=', 'projects.id')
            .join('contexts', 'contexts.projectId', 'id', 'projects.id');
    },
    addOne: project => {
        return knex('projects').insert(project);
    },
    update: (id, project) => {
        return knex('projects')
            .where({ id })
            .update(project);
    },
    nuke: id => {
        return knex('projects')
            .where({ id })
            .del();
    }
};

module.exports = projects;
