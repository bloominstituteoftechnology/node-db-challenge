
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', function(tbl) {
  	tbl.increments();

  	tbl
  		.string('context')
  		.notNullable();

  	tbl
  		.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contexts');
};
