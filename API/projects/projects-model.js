const db = require('../../data/dbConfig.js')

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource
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


//resources
function getResources() {
    return db('resource')
}

function addResource(resource) {
    return db('resource')
        .insert(resource)
}