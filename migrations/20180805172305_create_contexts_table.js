
exports.up = function(knex, Promise) {
return knex.schema.createTable('Contexts', function(tbl) {
  	tbl.increments();
  	tbl
  		.string('name', 90)
  		.notNullable();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Contexts');
};
