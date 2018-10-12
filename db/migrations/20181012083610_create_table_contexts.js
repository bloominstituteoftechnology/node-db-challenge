exports.up = function(knex, Promise) {
  return knex.schema.createTable('context', function(tbl) {
  	tbl.increments();

  	tbl
  		.string('context_name')
  		.notNullable()
  		.unique('context_name')
  		
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('context')
};