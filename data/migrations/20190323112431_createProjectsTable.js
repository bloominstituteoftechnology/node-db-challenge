
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.string('project_name')
      .notNullable();
    table.string('project_description')
      .notNullable();
    table.boolean('project_completed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
