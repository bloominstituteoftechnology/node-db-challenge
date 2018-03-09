
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action_contexts', function(tbl) {
  	tbl.increments();

  	tbl
  		.integer('contextId')
  		.unsigned()
  		.references('id')
  		.inTable('actions')

  	tbl
  		.integer('actionId')
  		.unsigned()
  		.references('id')
  		.inTable('contexts')

  	tbl
  		.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('action_contexts');
};
