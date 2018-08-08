const knex = require('knex')
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);

module.exports = {
    getProjects,
    getActions,
    getActionByProject,
    addProjects
}

function getProjects(id){
     if(id){
        return db('projects').where({ id })
     }

     return db('projects')
}

function addProjects(projects){
    return db('projects').insert({project_name : project.project_name, description : project.description})
}

function editProject(id, project){
    return db('project').
}
function getActions(id){
    if(id){
        return db('actions').where({ id })
    }
    return db('actions')
}

function getActionByProject(id){
    return db('actions').where({project_id : id})
}