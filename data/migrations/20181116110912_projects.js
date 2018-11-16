exports.up = function(knex, Promise) {
	return knex.schema.createTable('projects', (tbl) => {
		tbl.increments();
		tbl.string('name', 100);
		tbl.string('description', 255);
		tbl.boolean('complete');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('projects');
};
