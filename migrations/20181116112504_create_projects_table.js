
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
      table.increments();
      table.string('project_name', 150).notNullable().unique('project_name');
      table.string('project_desc', 500).notNullable().unique('project_desc');
      table.boolean('project_completed').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
