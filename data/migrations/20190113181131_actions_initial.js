
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function (table) {
        table.increments();
        table.string('description').notNullable();
        table.string('notes');
        table.boolean('completed');
        table.integer('project_id').unsigned().notNullable();
        table.foreign('project_id').references('id').on('projects');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
