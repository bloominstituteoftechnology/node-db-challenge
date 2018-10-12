exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions_context', function(tbl) {
  	tbl.increments();

	  tbl
  		.integer('action_id')
  		.unsigned()
  		.notNullable()
  		.references('id')
  		.inTable('actions')

  	tbl
  		.integer('context_id')
  		.unsigned()
  		.notNullable()
  		.references('id')
  		.inTable('context')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions_context')
};