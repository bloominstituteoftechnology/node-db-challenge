
exports.up = function(knex, Promise) {
    // Actions schema
    return knex.schema.createTable('actions', table => {
        table.increments();
        table.string('action_desc');
        table.string('action_notes');
        table.boolean('action_complete');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
