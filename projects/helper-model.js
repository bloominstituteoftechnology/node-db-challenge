const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findTasks,
    findTaskById,
    add,
    findResources,
    findResourceById,
    addResources,
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

function findResources(project_id) {
    return db('resources')
        .join('projects', 'project.id', 'resources.project_id')
        .select('resources.id', 'resources.resource_name', 'resources.description', 'project_id', 'projects.project_name')
        .where({project_id});
}

function findResourceById(id) {
    return db('resources')
      .where({ id })
      .first();
  }

function addResources(resource) {
    return db('resources')
    .insert(resources);
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