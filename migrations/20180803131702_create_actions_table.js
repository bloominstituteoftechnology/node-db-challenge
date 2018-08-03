
exports.up = function(knex, Promise) {
   return knex.schema.createTable('Actions', function(tbl) {
  	tbl.increments();
  	tbl
  		.string('description')
  		.notNullable()
  	tbl
  		.string('notes')
  		.notNullable();
  	tbl
  		.boolean('completed')
  		.notNullable();

  });
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('Actions');
};
