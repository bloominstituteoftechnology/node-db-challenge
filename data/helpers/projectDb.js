const knex = require('knex');
const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

module.exports = {
    add: function(project) {
        return db('project').insert(project);
    }
}