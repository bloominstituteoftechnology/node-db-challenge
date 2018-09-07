exports.up = function(knex, Promise) {
	return knex.schema.createTable("projects", table => {
		table.increments("id");
		table.string("name");
		table.string("description");
		table.boolean("completed").defaultTo(false);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("projects");
};
