const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


// Projects Helpers --------------------------------------------------------------------------------------------------------------
function getProjects() {
    return db('projects');
}

function getProject(id) {
    return db('projects').where({'id': id});
}

function addProject(project) {
    return db('projects').insert(project).into('projects');
}

// Actions Helpers --------------------------------------------------------------------------------------------------------------
function getActions(id) {
    if (!id) {
        return db('actions');
    } else {
        return db('actions').where({'projectId': id});
    }    
}

function addAction(action) {
    return db('actions').insert(action).into('actions');
}

module.exports = {getProjects, getProject, addProject, getActions, addAction}