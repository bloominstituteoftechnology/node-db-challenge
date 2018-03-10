
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions_contexts', table => {
  	table.increments();
  	table.integer('actionId').unsigned().references('id').inTable('actions');
  	table.integer('contextId').unsigned().references('id').inTable('contexts');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions_contexts');
};
