
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments();
        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .notNullable();
        tbl.string('description', 255).notNullable();
        tbl.string('notes', 128).notNullable();
        tbl.boolean('completed').defaultTo(false);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
