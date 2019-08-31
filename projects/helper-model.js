const db = require('../data/db.config');

module.exports = {
    find,
    findById,
    findTasks,
    findTaskById,
    add,
    update,
    remove
}

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first();
}

function findTasks(id) {
    return db('tasks')
        .join('projects', 'tasks.project_id', 'id')
        .select('tasks.id', 'projects.project_id', 'tasks.task_number', 'projects.project_name', 'tasks.instructions')
        .where({ project_id: id });
}

function findTaskById(id) {
    return db('tasks')
        .where({ id })
        .first();
}

function add(project) {
    return db('projects')
        .insert(project);
}

function update(changes, id) {
    return db('projects')
        .where({ id: id})
        .update(changes);
}

function remove(id) {
    return db('projects')
        .where({ id: id})
        .del();
}