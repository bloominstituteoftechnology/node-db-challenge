
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(actions) {
        actions.increments();
        actions.string('description-action').notNullable();
        actions.string('notes-action').notNullable();
        actions.bool('completed-action').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};