exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', function(tbl) {
    tbl.increments();
    tbl.string('name', 20).notNullable();
    tbl.string('description', 50).notNullable();

    tbl.boolean('complete').defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};