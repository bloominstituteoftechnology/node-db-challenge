const db = require('../data/db-config.js');




module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks
}

function getProjects() {
    return db('projects');
}

function getResources() {
    return db('resources');
}

function getTasks() {
    return db('tasks');
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => getProjects())
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(([id]) => getResources())
}

function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(([id]) => getTasks())
}