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

module.exports.getProjectByIDFormatted = function(id) {
    let query = db('projects as p');
    query.where('p.id', id);

    const promises = [query, getProjectActions(id)];

    return Promise.all(promises).then(function(results) {
        let [project, actions] = results;
        project.actions = actions;
        
        return [project, project.actions.map(action => {
            return action;
        })]
    });
}

getProjectActions = function(projectID) {
    return db('actions').where('project_id', projectID)
    .then((actions) => {
        return actions.map(action => {
            return action;
        })
    })
}