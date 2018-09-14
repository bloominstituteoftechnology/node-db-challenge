
exports.up = function (knex, Promise) {
    return knex.schema.createTable('actions', function (tbl) {
        tbl.increments();

        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')

        tbl
            .string('description', 1024)
            .notNullable();

        tbl
            .string('notes', 2000)

        tbl
            .boolean('completed')
            .defaultsTo(false)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
