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
    return db('task')
}

function addTask(task) {
    return('task')
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