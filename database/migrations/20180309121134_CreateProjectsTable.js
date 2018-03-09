
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
  	tbl.increments();

  	tbl
  		.string('name')
  		.notNullable()
  		.unique();

  	tbl
  		.text('description', 'longText')
  		.notNullable();

  	tbl
  		.boolean('complete')
  		.notNullable()

  	tbl
  		.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('projects');
};
