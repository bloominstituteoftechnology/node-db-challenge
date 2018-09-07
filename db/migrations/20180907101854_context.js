exports.up = function(knex, Promise) {
	return knex.schema.createTable("context", table => {
		table.increments("id");
		table.string("context");
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("context");
};
