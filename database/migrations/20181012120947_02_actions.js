
exports.up = function(knex, Promise) {
    return knex.schema.table('actions', function(table) {
        table.dropColumn('description-action');
        table.dropColumn('notes-action');
        table.dropColumn('completed-action');

        table
            .string('description_action')
            .notNullable()
            .defaultTo('blank');
        table
            .string('notes_action');
        table
            .boolean('completed_action');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};