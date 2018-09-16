
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function (tbl) {
      tbl.increments();
      tbl
        .string('name')
        .notNullable()
        .unique()
        .string('description')
        .boolean('completed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
