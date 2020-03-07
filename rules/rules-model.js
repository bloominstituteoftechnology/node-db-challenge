const db = require ('../data/db-config')

function getProjects() {
    return db('projects');
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then( id => {
            return findById(id[0])
        });
}

function getResources() {
    return db('resources')
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
}

function getTasks(id) {
    return db('projects')
        .join('tasks', 'tasks.project_id', 'projects.id')
        .select('*')
        .where({ 'tasks.project_id': id });
}

function addTask(task) {
    return db('tasks')
        .insert(task)
}

function findById(id) {
    return db('projects').where({ id }).first()
}

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTask
  };
