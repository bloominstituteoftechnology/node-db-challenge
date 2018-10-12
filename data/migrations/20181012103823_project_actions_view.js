exports.up = function(knex, Promise) {
    return knex.raw('create view project_actions as SELECT projects.id AS ProjectId, projects.name AS ProjectName, projects.description AS ProjectDescription, projects.is_complete AS ProjectCompleted, actions.id AS ActionId, actions.description AS ActionDescription, actions.notes AS ActionNotes, actions.is_complete AS ActionCompleted FROM actions LEFT OUTER JOIN projects ON projects.id = actions.project_id ORDER BY ProjectId');
};

exports.down = function(knex, Promise) {
    return knex.raw("drop view project_actions");
};
