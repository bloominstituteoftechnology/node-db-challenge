exports.up = function(knex, Promise) {
	return knex.schema.createTable('projects', (tbl) => {
		tbl.increments(); // unique id
		tbl.string('name', 100).notNullable(); // string with max of 100 characters
		tbl.string('description', 255).notNullable();
		tbl.boolean('completed').notNullable(); // takes true or false, returns 0 and 1
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('projects');
};
