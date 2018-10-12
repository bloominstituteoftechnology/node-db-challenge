const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    addProject
};

function addProject(project) {
    return db('projects')
    .insert(project)
    .into('projects');
}