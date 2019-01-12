const knex = require('knex');
const dbConfig = require('../../knexfile');

const db = knex(dbConfig.development);

module.exports = {
    get: function(id) {
        return db('project')
        .join('action', 'project.id', '=', 'action.project_id')
        .where('project.id', id)
        .select(
            'project.id', 
            'project.name',
            'project.description',
            'project.completed',
            'action.id as action_id',
            'action.description as action_description',
            'action.notes',
            'action.completed as action_completed'
        );
    },

    add: function(project) {
        return db('project').insert(project);
    }
}