exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
  	tbl.increments();

  	tbl
  		.string('action_name')
  		.notNullable()
  		.unique('action_name')

  	tbl
  		.string('action_description')
  		.notNullable()
  		.unique('action_description')

  	tbl
  		.string('notes')
  		.notNullable()

  	tbl
	  	.boolean('completed')
	  	.defaultTo(false)

	  tbl
  		.integer('project_id')
  		.unsigned()
  		.notNullable()
  		.references('id')
  		.inTable('projects')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions')
};
