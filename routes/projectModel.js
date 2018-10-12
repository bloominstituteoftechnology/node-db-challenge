const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    get,
    getById,
    add,
    update,
    remove,
};

// Get all the projects from the database
function get() {
    return db('project');
}

// Get the project from the database of the requested ID
function getById(id) {
    return db.select('*').from('project').where('project.id', id).first();
}

// Add a new project to the database
function add(proj) {
    return db('project').insert(proj).into('project');
}

// Update and existing project in the database of the requested ID
function update(id, changes) {
    return db('project').where({ id }).update(changes);
}

// Remove an existing project from the database of the requested ID
function remove(id) {
    return db('project').where({ id }).del();
}