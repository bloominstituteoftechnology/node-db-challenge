
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', projects => {
      projects.increments();
      projects.string('name', 128).notNullable().unique();
      projects.text('description');
      projects.boolean('completed').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
