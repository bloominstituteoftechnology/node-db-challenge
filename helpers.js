const knex = require('knex');

const db_config = require('./knexfile');

const db = knex(db_config.development);

module.exports.addProject = function(project) {
    return db('projects').insert(project);
}

module.exports.addAction = function(action) { 
    return db('actions').insert(action);
}

module.exports.getProjectByID = function(id) {
    return db('projects')
    .leftJoin('actions', 'actions.project_id', 'projects.id')
    .where('projects.id', id);
}