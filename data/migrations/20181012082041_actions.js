
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(actions) {
    actions.increments(); // primary key called id

    actions.string('description', 128).notNullable(); // description field

    actions.text('notes').notNullable(); // notes field

    actions.boolean('completed').defaultTo(false);

    actions 
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects'); // make foreign key to link to projects table
  });
  
};

exports.down = function(knex, Promise) {
  // rollback
  return knex.schema.dropTableIfExists('actions');
};
