exports.up = function (knex, Promise) {
    return knex.schema.createTable('action', table => {
        table.increments();
        table.text('description').notNullable();
        table.text('notes').notNullable();
        table.boolean('completed').defaultTo(0);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
