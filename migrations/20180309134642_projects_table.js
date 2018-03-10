
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
  	table.increments();
  	table.string('name').notNullable();
  	table.string('project_description').notNullable();
  	table.boolean('project_completed').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};

// many to many relationship with contexts (one project can belong to many contexts)
// one to many relationship with actions (one project can have many actions)