const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getProjects,
    getProject,
    getAction,
    addProject,
    addAction,
};

function getProjects() {
    return db('project');
}

function getProject(id) {
    return db.select('*').from('project').where('project.id', id).first();
}

function addProject(proj) {
    return db('project').insert(proj).into('project');
}

function getAction(id) {
    return db.select('*').from('action').where('project_id', id)
}

function addAction(act) {
    return db('action').insert(act).into('action');
}