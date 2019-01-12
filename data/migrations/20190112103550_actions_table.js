
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions_table', table => {
        table.increments();
        table.string('action_name');
        table.string('action_description');
        table.string('action_notes');
        table.boolean('action_completed');
        table.integer('project_id').unsigned();
        table.foreign('project_id').references('id').on('projects_table');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions_table');
};
