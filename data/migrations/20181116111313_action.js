exports.up = function(knex, Promise) {
	return knex.schema.createTable('action', (tbl) => {
		tbl.increments();
		tbl.string('description', 500).notNullable();
		tbl.string('notes', 255).notNullable();
		tbl.boolean('completed').notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists();
};
