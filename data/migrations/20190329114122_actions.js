exports.up = function(knex, Promise) {
    return  knex.schema.createTable('actions', table => {
        table.increments();
        table.integer('project_id').unsigned();
        table.foreign('project_id').references('id').on('projects')
        table.string('action_description').notNullable();
        table.string('action_note');
        table.boolean('action_complete').notNullable();
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('actions')
};
  