const db = require('../data/dbConfig');

function getProjects() {
    return db('projects');
}

function getResources() {
    return db('resources');
}

function getTasks() {
    return db('tasks');
}

function getProjectById(id) {
    return db('projects')
    .where({ id })
    .first();
}

function getResourceById(id) {
    return db('resources')
    .where({ id })
    .first();
}

function getTaskById(id) {
    return db('tasks')
    .where({ id })
    .first();
}


module.exports = {
    getProjects,
    getResources,
    getTasks,
    getProjectById,
    getResourceById,
    getTaskById
}