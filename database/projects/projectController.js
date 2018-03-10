const knex = require('../db');

const db = {
    getAll: () => {
        return knex('projects');
    },
    add: (project) => {
        return knex('projects')
            .insert(project);
    },
    nuke: (id) => {
        return knex('projects')
            .where({ id })
            .del()
    },
    update: (id, projectUpdate) => {
        return knex('projects')
            .where({ id })
            .update(projectUpdate);
    }
}