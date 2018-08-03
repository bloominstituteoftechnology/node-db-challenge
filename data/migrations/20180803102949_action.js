exports.up = function (knex, Promise) {
    return knex.schema.createTable('action', table => {
        table.increments();
        table.text('description').notNullable();
        table.text('notes').notNullable();
        table.boolean('complete').defaultTo(false);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
