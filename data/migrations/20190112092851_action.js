
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', table => {
        table.increments();
        table.string('description');
        table.string('notes');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
