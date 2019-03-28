exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
		tbl.increments();
    tbl.string('project_name').notNullable().unique();
    tbl.text('project_description');
    tbl.boolean('completed')
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};