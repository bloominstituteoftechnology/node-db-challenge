const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getProjects, 
    addProject,
    getActions, 
    addAction, 
    editAction
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