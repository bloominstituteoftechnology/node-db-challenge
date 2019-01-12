
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table=>{
      table.increments();
      table.string('description', 1023).notNullable();
      table.string('additional_notes', 1023);
      table.boolean('is_completed');
      table.integer('project_id').unsigned();
      table.foreign('project_id').references('id').on('projects');
  })
};

exports.down = function(knex, Promise) {
  
};
