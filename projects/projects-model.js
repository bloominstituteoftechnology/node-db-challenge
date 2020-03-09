const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    getTasks,
    getResources,
    addProjects,
    addTasks,
    addResources
};

function getProjects() {
    return db('projects');
};

function addProjects(project) {
    return db('projects').insert(project, 'id');
};

function getTasks() {
    return db('tasks')
        .join('projects', 'projects.id', '=', 'tasks.project_id')
        .select('projects.name as projectName', 'projects.description as projectDesc', 'tasks.name', 'tasks.description', 'tasks.id');
                
};

function addTasks(task) {
    return db('tasks').insert(task, 'id');
};

function getResources() {
    return db('resources');
};

function addResources(resource) {
    return db('resources').insert(resource, 'id');
};