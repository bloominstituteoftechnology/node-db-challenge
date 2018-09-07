exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
