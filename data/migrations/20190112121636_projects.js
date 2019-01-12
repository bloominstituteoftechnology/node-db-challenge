
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
      table.increments();
      table.string('project_name').notNullable();
      table.string('proj_description').notNullable();
      table.boolean('proj_completed').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
