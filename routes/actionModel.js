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

function get() {
    return db('action');
}
function getById(id) {
    return db.select('*').from('action').where('project_id', id)
}

function add(act) {
    return db('action').insert(act).into('action');
}

function update(id, changes) {
    return db('action').where({ id }).update(changes);
}

function remove(id) {
    return db('action').where({ id }).del();
}