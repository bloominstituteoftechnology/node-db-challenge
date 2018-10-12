exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
  	tbl.increments();

  	tbl
  		.string('project_name')
  		.notNullable()
  		.unique('project_name')

  	tbl
  		.string('project_description')
  		.notNullable()
  		.unique('project_description')

  	tbl
	  	.boolean('completed')
	  	.defaultTo(false)

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};