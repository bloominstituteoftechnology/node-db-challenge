exports.up = function(knex, Promise) {
	return knex.schema.createTable('actions', function(table) {
		table
			.increments();

		table
			.string('description', 255)
			.notNullable();
		
		table
			.string('notes', 255);

		table
			.boolean('completed');

		table
			.integer('project_id')
			.notNullable()
			.unsigned()
			.references('id')
			.inTable('projects');

		table
			.unique('description');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('actions');
};
