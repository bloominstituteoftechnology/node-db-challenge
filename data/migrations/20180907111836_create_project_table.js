
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments();

    tbl
      .string('name', 255)
      .notNullable()
      .unique('uq_project_name');

    tbl
      .text('description');

    tbl
      .boolean('completed')
      .notNullable()
      .default(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
