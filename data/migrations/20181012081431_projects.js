exports.up = function(knex, Promise) {
	return knex.schema.createTable("Projects", function(tbl) {
		tbl.increments("project_id");
		tbl.string("name", 255).notNullable();
		tbl.string("description", 255);
		tbl.boolean("completed").defaultTo(false);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("Projects");
};
