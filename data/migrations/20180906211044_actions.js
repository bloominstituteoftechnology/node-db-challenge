exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments();
    table.string('description').notNullable();
    table.text('notes').notNullable();
    table
      .integer('project_id')
      .notNullable()
      .unsigned();
    table.boolean('completed').defaultTo(false);
    table
      .foreign('project_id')
      .references('projects.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
