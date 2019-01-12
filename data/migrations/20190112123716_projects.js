
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.string('name').notNullable();
    table.text('desc');
    table.boolean('completed').notNullable().defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
