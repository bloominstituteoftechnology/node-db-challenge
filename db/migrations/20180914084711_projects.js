exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    table.increments();

    tbl.string('name', 128).notNullable();

    tbl.string('description', 128).notNullable();

    tbl.bool('completed').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
