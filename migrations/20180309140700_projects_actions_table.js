
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects_actions', table => {
  	table.increments();
  	table.integer('projectId').unsigned().references('id').inTable('projects');
  	table.integer('actionId').unsigned().references('id').inTable('actions');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects_actions');
};
