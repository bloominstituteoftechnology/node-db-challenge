
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments('id');
    tbl.string('name', 60).notNullable();
    tbl.string('description', 255).notNullable();
    tbl.boolean('complete');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
