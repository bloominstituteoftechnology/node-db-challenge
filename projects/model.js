const db = require('../data/dbConfig');

function getProjects() {
    return db('projects');
}

function getResources() {
    return db('resources');
}

function getTasks() {
    return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('t.id', 'p.name as project', 'p.description as description', 't.description as task', 't.notes', 't.completed');
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
    return db('tasks as t')
    .where({ id })
    .first();
}

function getTasksByProject(id) {
    return db('tasks as t')
    .where({ id })
    .join('projects as p', 'p.id', 't.project_id')
    .select('t.id', 't.description', 't.notes', 't.completed');
}


function addProject(project) {
    return db('projects')
    .insert(project, 'id')
    .then(id => {
        return getProjectById(id[0]);
    });
}

function addResource(resource) {
    return db('resources')
    .insert(resource, 'id')
    .then(id => {
        return getResourceById(id[0]);
    });
}

function addTask(task) {
    return db('tasks')
    .insert(task, 'id')
    .then(id => {
        return getTaskById(id[0]);
    });
}

module.exports = {
    getProjects,
    getResources,
    getTasks,
    getProjectById,
    getResourceById,
    getTaskById,
    getTasksByProject,
    addProject,
    addResource,
    addTask
}