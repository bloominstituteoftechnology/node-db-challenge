const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getProjects, 
    addProject,
    getActions, 
    addAction, 
    editAction, 
    editProject,
    deleteProject,
    deleteAction,
    getProjectActions
}

function getProjects(id){
    if(id){
        return db('projects').where('id', id)
    } else {
        return db('projects')
    }
}

function getActions(id){
    if(id){
        return db('actions').where('id', id)
    } else {
        return db('actions')
    }
}

function getProjectActions(id){
    return db('actions')
    .where('project_id', id)   
}

 function combineProjectActions(id){
    return db('projects')
    .join('actions', function (){
        this
        .on('actions.project_id', '=', 'projects.id')
    })
}

function addProject(newProject){
    return db('projects').insert(newProject)
}

function addAction(newAction){
    return db('actions').insert(newAction)
}

function editAction(action, id){
    return db('actions')
        .where('id', id)
        .update(action)
}

function editProject(projectChange, id){
    return db('projects')
        .where('id', id)
        .update(projectChange)
}

function deleteProject(id){
    return db('projects')
        .where('id', id)
        .del()
}

function deleteAction(id){
    return db('actions')
        .where('id', id)
        .del()
}