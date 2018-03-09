
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
  	tbl.increments();

  	tbl
  		.integer('projectId')
  		.unsigned()
  		.references('id')
  		.inTable('projects')

  	tbl
  		.text('description', 'longText')
  		.notNullable()

  	tbl
  		.text('notes', 'longText')
  		.notNullable()

  	tbl
  		.boolean('complete')
  		.notNullable()

  	tbl
  		.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('actions');
};
