
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl
      .increment('id')
      .string('name', 128)
      .notNullable()
      .string('description', 128)
      .notNullable()
      .boolean('completed')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
