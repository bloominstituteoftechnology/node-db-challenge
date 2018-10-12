const knex = require('knex');

const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development);

// Without View
// const findProjectWithActions = (id) => {
//     Error: SQLITE_ERROR: RIGHT and FULL OUTER JOINs are not currently supported
//     return db('actions')
//         .select('projects.id AS ProjectId', 'projects.name AS ProjectName', 'projects.description AS ProjectDescription', 'projects.is_complete AS ProjectCompleted', 'actions.id AS ActionId', 'actions.description AS ActionDescription', 'actions.notes AS ActionNotes', 'actions.is_complete AS ActionCompleted')
//         .leftOuterJoin('projects', 'projects.id', 'actions.project_id')
//         .where('project_id', id);
// };

// With View
const findProjectWithActions = (projId) => {
    return db('project_actions')
        .where('ProjectId', projId);
};

const add = (newProject) => {
    return db('projects')
        .insert(newProject)
        .into('projects');
};

module.exports = { 
    findProjectWithActions, 
    add
};
