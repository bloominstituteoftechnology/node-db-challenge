
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments(); 

    tbl
      .string('name', 100)
      .notNullable()
      .unique()
      .defaultTo('Not Provided');

    tbl
    .string('description', 256)
    .notNullable()
    .unique()
    .defaultTo('Not Provided');

    tbl
      .boolean('completed')
      .defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
