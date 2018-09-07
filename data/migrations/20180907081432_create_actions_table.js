
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('actions', function(table) {
		table.increments();
		table
			.string('description')
			.notNullable()
		table
			.string('notes')
			.notNullable()
		table
			.boolean('complete')
			.default(false)
		table
			.integer('project_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('projects')
  	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions')
};

