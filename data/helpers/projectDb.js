const knex = require('knex');
const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

module.exports = {
    get: function(id) {
        return db('project')
        .where('id', id);
    },

    add: function(project) {
        return db('project').insert(project);
    }
}