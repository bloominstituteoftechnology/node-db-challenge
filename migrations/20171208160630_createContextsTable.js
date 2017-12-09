exports.up = function(knex, Promise) {
	return knex.schema.createTable('contexts', function(tbl) {
		tbl.increments('id'); // primary key

		tbl
			.string('context', 255)
			.notNullable()
			.unique('context');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('contexts');
};
