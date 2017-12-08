
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments('id');
    tbl.string('name', 128).notNullable();
    tbl.string('description', 128).notNullable();
    tbl.boolean('completed').notNullable().defaultTo(false);
    tbl
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
