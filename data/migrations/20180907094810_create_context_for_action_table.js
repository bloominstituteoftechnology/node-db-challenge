
exports.up = function(knex, Promise) {
  return knex.schema.createTable('context_for_action', function(table) {
  	table.increments();
  	table
  		.integer('action_id')
  		.unsigned()
  		.notNullable()
  		.references('id')
  		.inTable('actions')
	table
		.integer('context_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('contexts')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('context_for_action')
};
