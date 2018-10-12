const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getProject,
    getProjectById,
    addProject,
};

function addProject(project) {
    return db('projects')
    .insert(project)
    .into('projects');
}

function getProject() {
    return db('projects');
}

function getProjectById(id) {
    return db('projects')

}