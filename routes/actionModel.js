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

// Get all the actions from the database
function get() {
    return db('action');
}

// Get the action from the database of the requested ID
function getById(id) {
    return db.select('*').from('action').where('project_id', id)
}

// Add a new action to the database
function add(act) {
    return db('action').insert(act).into('action');
}

// Update and existing action in the database of the requested ID
function update(id, changes) {
    return db('action').where({ id }).update(changes);
}

// Remove an existing action from the database of the requested ID
function remove(id) {
    return db('action').where({ id }).del();
}