
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', table => {
        table.increments();
        table.string('action-description').notNullable();
        table.string('action-notes');
        table.boolean('action-complete');
        table.integer('project_id').unsigned();
        table.foreign('project_id').references('id').on('projects')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExits('actions');
};
