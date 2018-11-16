
exports.up = function(knex, Promise) {
    return knex.schema
        .table('actions', actions => {
            actions.renameColumn('completed?', 'completed');
        })
        .table('projects', projects => {
            projects.renameColumn('completed?', 'completed');
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .table('actions', actions => {
            actions.renameColumn('completed', 'completed?');
        })
        .table('projects', projects => {
            projects.renameColumn('completed', 'completed?');
        })
};
