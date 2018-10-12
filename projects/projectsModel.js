const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    add,
};

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects')
        // .select('*')
        // .from('projects')
        // .where({id})
        
        .select({
            project_name: 'projects.name',
            action_description: 'actions.description'
        })
        .join('actions', 'actions.project_id', 'projects.id')
        .where('projects.id', id);
}

function add(project) {
    return db('projects')
        .insert(project)
        .into('projects');
}