const db = require('../data/db-config.js');

// Build an API with endpoints for:
// adding resources.
// retrieving a list of resources.
// adding projects.
// retrieving a list of projects.
// adding tasks.
// retrieving a list of tasks. The list of tasks should include the project name and project description.

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
