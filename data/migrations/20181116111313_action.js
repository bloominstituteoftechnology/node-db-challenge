exports.up = function(knex, Promise) {
	return knex.schema.createTable('action', (tbl) => {
		tbl.increments();
		tbl.string('description', 500).notNullable();
		tbl.string('notes', 255).notNullable();
		tbl.boolean('completed').defaultTo(false);
		tbl.integer('project_id').unsigned().references('id').inTable('projects');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists();
};
