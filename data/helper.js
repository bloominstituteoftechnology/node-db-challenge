const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


// Projects Helpers --------------------------------------------------------------------------------------------------------------
function getProject(id) {
    return db('projects').where({'id': id});
}

function addProject(project) {
    return db('projects').insert(project).into('projects');
}

// Actions Helpers --------------------------------------------------------------------------------------------------------------

function getActions(id) {
    return db('actions').where({'projectId': id});
} 

function addAction(action) {
    return db('actions').insert(action).into('actions');
}

module.exports = {getProject, addProject, getActions, addAction}