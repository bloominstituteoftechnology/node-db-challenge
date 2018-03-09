
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects_contexts', table => {
    table.increments();
    table.integer('projectId').unsigned().references('id').inTable('projects');
    table.integer('contextsId').unsigned().references('id').inTable('contexts');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects_contexts');
};
