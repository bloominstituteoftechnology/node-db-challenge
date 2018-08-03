exports.up = function (knex, Promise) {
    return knex.schema.createTable('project', table => {
        table.increments();
        table.text('name').notNullable();
        table.text('description').notNullable();
        table.boolean('completed').defaultTo(0);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};
