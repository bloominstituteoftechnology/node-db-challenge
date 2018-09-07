exports.up = function(knex, Promise) {
	return knex.schema.createTable("context", table => {
		table.increments("id");
		table.string("description");
		table
			.integer("action_id")
			.notNullable()
			.references("id")
			.inTable("actions");
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("context");
};
