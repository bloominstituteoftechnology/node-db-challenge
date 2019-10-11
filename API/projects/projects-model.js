const db = require('../../data/dbConfig.js')

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTask
}

//project
function getProjects() {
    return db('project')
}

function addProject(project) {
    return db('project')
        .insert(project)
}

//task

function getTasks() {
    return db('task as t')
    .join('project as p', 'p.id', '=', 't.project_id')
    .select('t.id','p.project_name', 'p.description as projectDescription', 't.description as task','t.completed')
}

function addTask(task) {
    return db('task')
        .insert(task)
}


//resources
function getResources() {
    return db('resource')
}

function addResource(resource) {
    return db('resource')
        .insert(resource)
}