
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', table=>{
        table.increments();
        table.string('action_description').notNullable();
        table.string('notes');
        table.boolean('action_completed');
        table.integer('project_id').unsigned();
        table.foreign('project_id').references('id').on('projects');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
