
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table=>{
      table.increments();
      table.string('project_name').notNullable();
      table.string('description', 1023);
      table.boolean('is_completed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
