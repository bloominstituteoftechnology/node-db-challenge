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

function deleteProject(id) {
    return db('projects').where({'id': id}).del();
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

function deleteAction(id) {
    return db('actions').where({'id': id}).del();
}

module.exports = {getProjects, getProject, addProject, deleteProject, getActions, addAction, deleteAction}