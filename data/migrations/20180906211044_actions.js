exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments();
    table.string('description').notNullable();
    table.text('notes').notNullable();
    table
      .integer('project_id')
      .notNullable()
      .references('id')
      .inTable('projects');
    table.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
