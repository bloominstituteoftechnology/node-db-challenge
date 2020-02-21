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
    return db('projects')
        .join('tasks', 'tasks.project_id', 'projects.id')
        .select('tasks.name', 'tasks.description','projects.name', 'projects.description')
        .where('project_id', 1);
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