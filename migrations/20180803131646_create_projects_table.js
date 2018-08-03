
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Projects', function(tbl) {
  	tbl.increments();
  	tbl
  		.string('name')
  		.notNullable()
  		.unique();
  	tbl
  		.string('description')
  		.notNullable();
  	tbl
  		.boolean('completed')
  		.notNullable();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Projects');
};
