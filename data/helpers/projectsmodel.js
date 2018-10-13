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

// Nested Test
const findProjectNestedActions = (id) => {
    return db('projects')
        .where({id})
        .first()
        .then((project) => {
            return db('actions')
                .where('project_id', id)
                .then((actions) => {
                    project.actions = actions;
                    return project;
                })
                .catch((err) => console.error('Model Error:\n', err));
        })
        .catch((err) => console.error('Model Error:\n', err));
};

const add = (newProject) => {
    return db('projects')
        .insert(newProject)
        .into('projects');
};

module.exports = { 
    findProjectWithActions, 
    findProjectNestedActions, 
    add
};
