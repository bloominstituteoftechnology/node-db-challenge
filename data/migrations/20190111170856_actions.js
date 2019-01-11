
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions' , table =>{
      table.increments('id');
      table.string('action_description').notNullable();
      table.string('notes');
      table.boolean('completed');
      table.integer('project_id').unsigned();
      table.foreign('project_id').references('id').on('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
