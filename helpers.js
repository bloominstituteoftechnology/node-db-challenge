const knex = require('knex');
const knexConfig = require('./knexfile.js');

// using knex to configure the knex init file
const db = knex(knexConfig.development);



// exports for helpers

module.exports = {
    getProjects,
    getActions,
    getProjectsById,
    getActionsById,
    postProjects,
    postActions
}

function getProjects() {
    return db('projects');
}

function getActions() {
    return db('actions');
}

function getProjectsById(id) {
    return db('projects')
        .where({ id })
        .first();
}

function getActionsById(id) {
    return db('actions')
        .where({ id })
        .first();
}

function postProjects(project) {
    return db('projects')
        .insert(project)
        .into('projects');
}

function postActions(action) {
    return db('actions')
        .insert(action)
        .into('actions');
}

// function getProjectActions(projectId) {
//     return db('')
// }