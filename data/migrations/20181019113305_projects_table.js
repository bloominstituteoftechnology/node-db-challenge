exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments();
    tbl.string('name', 20).notNullable();
    tbl.string('description', 50).notNullable();

    tbl.boolean('completed').defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};