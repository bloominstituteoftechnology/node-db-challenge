exports.up = function(knex, Promise) {
	return knex.schema.createTable("actions", table => {
		table.increments("id");
		table.string("description");
		table.string("notes");
		table.boolean("completed").defaultTo(false);
		table
			.integer("project_id")
			.notNullable()
			.references("id")
			.inTable("projects");
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("actions");
};
