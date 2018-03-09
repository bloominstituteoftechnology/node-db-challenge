const knex = require('../database/db');

const projects = {
    getAll: () => {
        return knex('projects');
    },
    addOne: project => {
        return knex('projects').insert(project);
    }
};

module.exports = projects;
