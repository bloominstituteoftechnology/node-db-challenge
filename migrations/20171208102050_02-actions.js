
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', (table) => {
        table.increments('id');
        table.text('description').notNullable();
        table.text('notes');
        table.boolean('completed');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
