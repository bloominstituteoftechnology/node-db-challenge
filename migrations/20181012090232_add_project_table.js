
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(projects){
      projects.increments();
      projects.string('name', 50).notNullable();
      projects.string('description');
      projects.boolean('completed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
