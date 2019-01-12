
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', table => {
        table.increments();
        table.string('description').notNullable();
        table.string('notes');
        table.integer('project_id').unsigned();
        table.foreign('project_id').references('id').on('projects');
        table.boolean('complete');

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};