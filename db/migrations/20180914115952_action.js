
exports.up = function (knex, Promise) {
    return knex.schema.createTable('actions', function (tbl) {
        tbl.increments();

        tbl
            .integer('projects_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')

        tbl
            .string('description', 1024)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
