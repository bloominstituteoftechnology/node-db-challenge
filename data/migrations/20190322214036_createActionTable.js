exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
		tbl.increments();
    tbl.text('action_description');
    tbl.text('action_notes')
    tbl.boolean('completed')
    tbl
    .integer('project_id')
    .unsigned()
    .references('id')
    .inTable('dishes')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
   
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};