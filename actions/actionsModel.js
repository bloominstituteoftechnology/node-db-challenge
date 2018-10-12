const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getAction,
    getActionById,
    addAction
};

function addAction(action) {
    return db('actions')
    .insert(action)
    .into('actions');
}

function getAction() {
    return db('actions');
}

function getActionById(id) {
    return db('actions')

}