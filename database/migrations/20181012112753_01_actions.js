
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(actions) {
        actions
            .increments();
        actions
            .string('description-action')
            .notNullable();
        actions
            .string('notes-action');
        actions
            .boolean('completed-action');

        actions
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};