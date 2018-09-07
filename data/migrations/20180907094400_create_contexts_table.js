
exports.up = function(knex, Promise) {
	return knex.schema.createTable('contexts', function(table) {
		table.increments();
		table
			.string('name', 100)
			.notNullable()
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contexts')
};
