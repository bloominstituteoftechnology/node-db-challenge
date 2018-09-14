const knex = require('knex');
const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

module.exports = {
    getProjects: function (id) {
        let query = db('projects');

        if (id) {
            return query
                .where('id', id)
                .first()
                .then(project => project) // return project with mathcing id
        } else {
            return query.then(projects => projects) // return all projects if no id
        }
    },

};