
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', projects=>{
      projects.increments();
      projects.string('name',255).notNullable();
      projects.string('description', 500).notNullable();
      projects.boolean('completed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
