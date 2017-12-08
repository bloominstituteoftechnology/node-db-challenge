
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(table) {
        table.increments('id');
        table.string('name', 128).notNullable();
        table.string('description', 128).notNullable();
        table.boolean('completed')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};
