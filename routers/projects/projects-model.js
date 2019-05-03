const knex = require('knex')
const config = require('../../knexfile')

const db = knex(config.development)

module.exports = {
    getProjects,
    getProject,
    addProject
    // getProjectsActions
}

function getProjects() {
    return db('projects')
}

function getProject(id) {
    return db('projects')
        .where({ id: Number(id) })
        .first()
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(ids => ({ id: ids[0] }))
}

