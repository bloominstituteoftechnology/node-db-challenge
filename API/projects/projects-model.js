const db = require('../../data/dbConfig.js')
module.exports = {
    getProjects,
    addProject
}

function getProjects() {
    return db('project')
}

function addProject(project) {
    return db('project')
        .insert(project)
}