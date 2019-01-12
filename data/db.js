const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    addProject,
    addAction,
    getProject
}

function addProject(project) {
    return db('projects_table')
        .insert(project)
        .then(ids => ({id: ids[0]}));
};

function addAction(action) {
    return db('actions_table')
        .insert(action)
        .then(ids => ({id: ids[0]}));
};
