exports.up = function(knex, Promise) {
	return knex.schema.createTable('actions', function(tbl) {
		tbl.increments();
		tbl
			.integer('project_id')
			.notNullable()
			.references('id')
			.inTable('projects');
		tbl.string('description').notNullable();
		tbl.string('notes');
		tbl.boolean('completed');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('actions');
};
