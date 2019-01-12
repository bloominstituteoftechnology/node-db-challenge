
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects',    table   =>  {
      table.increments();
      table.string('project_name').notNullable();
      table.string('description');
      table.boolean('project_complete');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
