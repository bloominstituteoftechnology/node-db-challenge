const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    postProject,
    postAction,
    getProject
};

function postProject(project){
    return db('projects').insert(project);
};

function postAction(action){
    return db('actions').insert(action);
};

function getProject(id){
    return db('projects').where({id}).first();
};