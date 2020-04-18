
exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
        // auto incrmenting primary id
        table.increments();
        // Name field, required
        table.text('name').notNullable();
        // Description field, not required
        table.text('description')
        // Completed field, defaults to 0
        table.integer('completed').defaultTo(0);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
};
