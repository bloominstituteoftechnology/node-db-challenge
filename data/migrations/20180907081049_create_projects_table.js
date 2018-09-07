
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('projects', function(table) {
		table.increments();
		table
			.string('name', 100)
			.notNullable()
		table
			.string('description')
			.notNullable()
		table
			.boolean('complete')
			.default(false)
  	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
