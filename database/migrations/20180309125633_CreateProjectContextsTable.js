
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project_contexts', function(tbl) {
  	tbl.increments();

  	tbl
  		.integer('contextId')
  		.unsigned()
  		.references('id')
  		.inTable('contexts')

  	tbl
  		.integer('projectId')
  		.unsigned()
  		.references('id')
  		.inTable('projects')

  	tbl
  		.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('project_contexts');
};
