const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


// Projects Helpers --------------------------------------------------------------------------------------------------------------


function addProject(project) {
    return db('projects').insert(project).into('projects');
}

// Actions Helpers --------------------------------------------------------------------------------------------------------------

function addAction(action) {
    return db('actions').insert(action).into('actions');
}

module.exports = { addProject, addAction}