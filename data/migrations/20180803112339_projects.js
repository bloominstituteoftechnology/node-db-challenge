exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('description');
    table.boolean('completed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
