exports.up = function(knex, Promise) {
	return knex.schema.createTable('projects', (tbl) => {
		tbl.increments();
		tbl.string('name', 100).notNullable();
		tbl.string('description', 255).notNullable();
		tbl.boolean('completed').notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('projects');
};
