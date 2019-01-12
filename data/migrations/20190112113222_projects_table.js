
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.string('project_name', 300).notNullable();
    table.string('project_description', 500).notNullable();
    table.boolean('project_completed').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
