
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    // primary key
    tbl.increments('id');

    // otherfields
    tbl
      .string('name', 128)
      .notNullable();
    tbl
      .string('description', 256)
      .notNullable();
    tbl.boolean('completed').defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
