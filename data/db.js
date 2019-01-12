const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    addProject,
    addAction,
    getProject
}

// helper method to insert project into database and return ID

function addProject(project) {
    return db('projects_table')
        .insert(project)
        .then(ids => ({id: ids[0]}));
};

// helper method to insert action into database and return ID

function addAction(action) {
    return db('actions_table')
        .insert(action)
        .then(ids => ({id: ids[0]}));
};

// helper method to get project and return project details and related actions

function getProject(id) {

    // RETURN PROJECT WITH UNNESTED ACTION

    return db('projects_table')
        .where('projects_table.id', id)
        .leftJoin('actions_table', {'projects_table.id': 'project_id'});
};
