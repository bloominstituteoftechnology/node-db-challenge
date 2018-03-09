
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
  	table.increments();
  	table.string('description').notNullable();
  	table.string('notes').notNullable();
  	table.boolean('completed').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};

// one to one relationship between actions and projects (action can only belong to one project)
// one to many relations with contexts (one action can belong to many contexts)