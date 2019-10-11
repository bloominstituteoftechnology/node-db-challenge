const db = require('../../data/dbConfig.js')

module.exports = {
    getProjects,
    addProject,
    getResources
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