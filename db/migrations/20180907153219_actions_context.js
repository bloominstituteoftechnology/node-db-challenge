exports.up = function(knex, Promise) {
	return knex.schema.createTable("actions_context", table => {
		table.increments("id");
		table
			.integer("action_id")
			.notNullable()
			.references("id")
			.inTable("actions");
		table
			.integer("context_id")
			.notNullable()
			.references("id")
			.inTable("context");
	});
};

exports.down = function(knex, Promise) {};
