const knex = require('knex');
const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

module.exports = {
    get: function(id) {
        return db('action')
        .where('project_id', id);
    },

    add: function(action) {
        return db('action').insert(action);
    }
}