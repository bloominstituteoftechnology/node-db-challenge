const knex = require('knex')
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);

module.exports = {
    getProjects,
    getActions,
    getActionByProject,
    addProjects,
    editProject,
    deleteProject,
    addAction,
    editAction,
    deleteAction
}

function getProjects(id){
     if(id){
        return db('projects').where({ id })
     }

     return db('projects')
}

function addProjects(newProjects){
    return db('projects').insert(newProjects)
}

function editProject(id, projectUpdate){
    return db('projects').where({ id }).update(projectUpdate)
}

function deleteProject(id){
    if(id){
        return db('projects').where({ id }).del()
    }
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

function addAction(action){
    return db('actions').insert(action)
}

function editAction(id, actionUpdate){
    return db('actions').where({ id }).update(actionUpdate)
}

function deleteAction(id){
    return db('actions').where({ id }).delete
}