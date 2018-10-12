exports.up = function(knex, Promise) {
	return knex.schema.createTable("Actions", function(tbl) {
		tbl.increments("action_id");
		tbl.string("description", 255);
		tbl.string("notes", 255);
		tbl.boolean("completed").defaultTo(false);
		//implementation of a one to many relationship. Many actions to one project.
		tbl
			.integer("project_id")
			.notNullable()
			.references("project_id")
			.inTable("Projects")
			.onDelete("CASCADE");
	});
};

exports.down = function(knex, Promise) {};
