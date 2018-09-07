const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getProjects, 
    addProject,
    getActions, 
    addAction
}

function getProjects(){
    return db('projects')
}

function getActions(){
    return db('actions')
}

function addProject(newProject){
    return db('projects').insert(newProject)
}

function addAction(newAction){
    return db('actions').insert(newAction)
}