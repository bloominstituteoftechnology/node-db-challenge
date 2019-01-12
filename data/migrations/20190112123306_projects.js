exports.up = function (knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.string('Name').notNullable();
    table.text('description');
    table.boolean('Completed');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
