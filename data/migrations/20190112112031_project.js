
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', table => {
      table.increments();
      table.string('project_name').notNullable().unique();
      table.string('project_description').notNullable();
      table.boolean('project_completed').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project')
};
