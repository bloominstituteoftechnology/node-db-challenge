exports.up = function(knex, Promise) {
	return knex.schema.createTable('actions', function(tbl) {
		tbl.increments('id');
		tbl
			.integer('projectId')
			.notNullable()
			.references('id')
			.inTable('projects');
		tbl.string('description', 128).notNullable();
		tbl.text('notes').notNullable();
		tbl
			.boolean('completed')
			.notNullable()
			.defaultTo(false);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('actions');
};
