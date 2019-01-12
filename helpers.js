const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

module.exports = {
    getActions
}

function getActions(id) {
    return db('action').where('project_id', id)
}