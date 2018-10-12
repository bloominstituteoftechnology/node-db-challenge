
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
	tbl.increments();
	tbl.string('description', 255).notNullable();
	tbl.string('notes', 5000).notNullable();
	tbl.string('project_id').unsigned().notNullable().references('id').inTable('projects');
	tbl.boolean('completed').defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
