
exports.up = function (knex, Promise) {
    return knex.schema.createTable('actions', function (tbl) {
        tbl.increments();
        tbl.string('desription', 255);
        tbl.string('notes', 255);
        tbl.boolean('complete');

        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};