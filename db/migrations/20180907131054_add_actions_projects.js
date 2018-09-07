
exports.up = function (knex, Promise) {
    return knex.schema.table('projects', function (tbl) {
        tbl.integer('action_id')
            .unsigned()
            .references('project_id')
            .inTable('actions');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.table('projects', function (tbl) {
        tbl.dropColumn('action_id');
    })
};
