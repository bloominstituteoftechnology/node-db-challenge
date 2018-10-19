const knex = require('knex');
const knexConfig = require('./knexfile.js');

// using knex to configure the knex init file
const db = knex(knexConfig.development);

// exports for helpers

module.exports = {
    getProjects,
    getProjectsById,
    getActionsById,
    postProject,
    postAction
}

function getProjects() {
    return db('projects');
}

function getProjectsById(id) {
    return db('projects')
        .where({ id })
        .first();
}

function getActionsById(id) {
    return db('actions')
        .where({ project_id: id })
}

function postProject(project) {
    return db('projects')
        .insert(project)
        .into('projects');
}

function postAction(action) {
    return db('actions')
        .insert(action)
        .into('actions');
}

// function getProjectActions(projectId) {
//     return db('')
// }